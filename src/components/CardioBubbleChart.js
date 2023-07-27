import React, { useEffect, useState } from 'react';
import { VictoryScatter, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Card, Row } from "react-bootstrap";
import { db, auth } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import Switch from 'react-switch';

export default function CardioBubbleChart() {
  const [cardioData, setCardioData] = useState([]);
  const [showFourteenDays, setShowFourteenDays] = useState(false);

  useEffect(() => {
    const fetchCardioData = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7));
        const snapshot = await getDocs(queryRef);
        const documents = snapshot.docs.map((doc) => doc.data());
        const reversed = documents.reverse();
        setCardioData(reversed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCardioData();

    const CollectionRef = collection(db, 'data');
    const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7));
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setCardioData(reversed);
    });

    return () => unsubscribe();
  }, [showFourteenDays]);

  const formatDate = (dateString) => {
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    return `${month}-${day}`;
  };

  const handleToggle = () => {
    setShowFourteenDays(!showFourteenDays); 
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <Switch onChange={handleToggle} checked={showFourteenDays} uncheckedIcon={false} checkedIcon={false} onColor="#007bff" />
            <span>Show 14 Days</span>
          </Row>
          <div style={{ height: '50vh' }}>
            {cardioData.length > 0 && (
              <VictoryChart width={800} domainPadding={50} theme={VictoryTheme.material} >
                <VictoryAxis tickValues={cardioData.map((data) => data.entryDate)} tickFormat={(date) => formatDate(date)} />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x} min`} />
                <VictoryScatter data={cardioData} x="entryDate" y="cardioDuration" size={({ datum }) => datum.cardioDistance * 5} />
              </VictoryChart>
            )}
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
