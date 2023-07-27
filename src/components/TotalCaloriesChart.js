import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryScatter, VictoryLine } from 'victory';
import { Card, Row } from "react-bootstrap";
import { db, auth } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import Switch from 'react-switch'; // Import the react-switch component

export default function TotalCaloriesChart() {
  const [totalCalorieData, setTotalCalorieIntakeData] = useState([]);
  const [showSevenDays, setShowSevenDays] = useState(true); // Initialize to true to show 7 days initially

  useEffect(() => {
    const fetchCalorieIntake = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showSevenDays ? 7 : 14)); // Use the showSevenDays state variable to determine the limit
        const snapshot = await getDocs(queryRef);
        const documents = snapshot.docs.map((doc) => doc.data());
        const reversed = documents.reverse();
        setTotalCalorieIntakeData(reversed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCalorieIntake();

    const CollectionRef = collection(db, 'data');
    const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showSevenDays ? 7 : 14)); // Use the showSevenDays state variable to determine the limit
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setTotalCalorieIntakeData(reversed);
      console.log(reversed);
    });

    return () => unsubscribe();
  }, [showSevenDays]); // Add showSevenDays as a dependency to the useEffect so it refreshes when it changes

  const formatDate = (dateString) => {
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);
    return `${month}-${day}`;
  };

  const tickValues = totalCalorieData.map((data) => data.entryDate);

  const legendData = [
    { label: 'Total Daily Caloric Intake', color: 'blue' },
  ];

  const handleToggle = () => {
    setShowSevenDays(!showSevenDays); // Toggle the showSevenDays state
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Row style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <span>Show 7 Days</span>
            <Switch
              onChange={handleToggle}
              checked={showSevenDays}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#007bff"
            />
            <span>Show 14 Days</span>
          </Row>
          <div style={{ height: '50vh' }}>
            {totalCalorieData.length > 0 && (
              <VictoryChart width={600} domainPadding={50} theme={VictoryTheme.material}>
                <VictoryAxis tickValues={tickValues} tickFormat={(date) => formatDate(date)} />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}cals`} />
                <VictoryScatter data={totalCalorieData} x="entryDate" y="totalCalories" style={{ data: { fill: 'blue' } }} size={5} />
                <VictoryLine data={totalCalorieData} x="entryDate" y="totalCalories" style={{ data: { stroke: 'blue' } }} />
              </VictoryChart>
            )}
          </div>
          <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
            {legendData.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
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
