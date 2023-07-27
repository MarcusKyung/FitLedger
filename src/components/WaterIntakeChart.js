import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Card, Row } from "react-bootstrap";
import { db, auth } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import Switch from 'react-switch'; 

export default function WaterIntakeChart() {
  const [waterIntakeData, setWaterIntakeData] = useState([]);
  const [showFourteenDays, setShowFourteenDays] = useState(false); 

  useEffect(() => {
    const fetchWaterIntake = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); // Use the showFourteenDays state variable to determine the limit
        const snapshot = await getDocs(queryRef);
        const documents = snapshot.docs.map((doc) => doc.data());
        const reversed = documents.reverse();
        setWaterIntakeData(reversed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWaterIntake();

    const CollectionRef = collection(db, 'data');
    const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); 
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setWaterIntakeData(reversed);
      console.log(reversed);
    });

    return () => unsubscribe();
  }, [showFourteenDays]); 

  const getColor = (value) => {
    if (value >= 100) {
      return 'green';
    } else if (value < 50) {
      return 'red';
    } else {
      return 'orange';
    }
  };

  const legendData = [
    { label: 'Water Intake >= 100 oz', color: 'green' },
    { label: 'Water Intake 50-100 oz', color: 'orange' },
    { label: 'Water Intake < 50 oz', color: 'red' },
  ];

  const formatDate = (dateString) => {
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    return `${month}-${day}`;
  };

  const handleToggle = () => {
    setShowFourteenDays(!showFourteenDays); // Toggle the showFourteenDays state
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
            {waterIntakeData.length > 0 && (
              <VictoryChart width={800} domainPadding={50} theme={VictoryTheme.material} >
                <VictoryAxis tickValues={waterIntakeData.map((data) => data.entryDate)} tickFormat={(date) => formatDate(date)} />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}oz`} />
                <VictoryBar barRatio={0.5} data={waterIntakeData} x="entryDate" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake) } }} />
              </VictoryChart>
            )}
          </div>
          <Row>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {legendData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: item.color, marginRight: '5px', }}></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
