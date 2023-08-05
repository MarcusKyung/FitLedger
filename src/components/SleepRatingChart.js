import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryScatter, VictoryLine } from 'victory';
import { Card, Row } from "react-bootstrap";
import { db, auth } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import Switch from 'react-switch'; 

export default function SleepRatingChart() {
  const [sleepScore, setSleepScore] = useState([]);
  const [showFourteenDays, setShowFourteenDays] = useState(false); 

  useEffect(() => {
    const fetchSleepScore = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); 
        const snapshot = await getDocs(queryRef);
        const documents = snapshot.docs.map((doc) => doc.data());
        const reversed = documents.reverse();
        setSleepScore(reversed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSleepScore();

    const CollectionRef = collection(db, 'data');
    const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); 
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setSleepScore(reversed);
      console.log(reversed);
    });

    return () => unsubscribe();
  }, [showFourteenDays]); 

  const formatDate = (dateString) => {
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    return `${month}-${day}`;
  };

  const tickValues = sleepScore.map((data) => data.entryDate);

  const legendData = [
    { label: 'Daily Sleep Score 1-10', color: 'blue' },
  ];

  const handleToggle = () => {
    setShowFourteenDays(!showFourteenDays); 
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <Switch onChange={handleToggle} checked={showFourteenDays} uncheckedIcon={false} checkedIcon={false} onColor="#007bff"/>
            <span>Show 14 Days</span>
          </Row>
          <div style={{ height: '50vh' }}>
            {sleepScore.length > 0 && (
              <VictoryChart width={800} domainPadding={50} theme={VictoryTheme.material}>
                <VictoryAxis tickValues={tickValues} tickFormat={(date) => formatDate(date)} />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}/10`} />
                <VictoryScatter data={sleepScore} x="entryDate" y="sleepScore" style={{ data: { fill: 'blue' } }} size={5} />
                <VictoryLine data={sleepScore} x="entryDate" y="sleepScore" style={{ data: { stroke: 'blue' } }} />
              </VictoryChart>
            )}
          </div>
          <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
            {legendData.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: item.color, marginRight: '5px' }}></div>
                <span>{item.label}</span>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
