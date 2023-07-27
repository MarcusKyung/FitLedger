import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory';
import { Card, Row } from "react-bootstrap";
import { db, auth } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot, where } from 'firebase/firestore';
import Switch from 'react-switch'; 

export default function MacrobreakdownChart() {
  const [macroData, setMacroData] = useState([]);
  const [showFourteenDays, setShowFourteenDays] = useState(false); 

  useEffect(() => {
    const fetchMacroData = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); 
        const snapshot = await getDocs(queryRef);
        const documents = snapshot.docs.map((doc) => doc.data());
        const reversed = documents.reverse();
        setMacroData(reversed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMacroData();

    const CollectionRef = collection(db, 'data');
    const queryRef = query(CollectionRef, where("author", "==", auth.currentUser.email), orderBy('entryDate', 'desc'), limit(showFourteenDays ? 14 : 7)); 
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setMacroData(reversed);
      console.log(reversed);
    });

    return () => unsubscribe();
  }, [showFourteenDays]); 

  const legendData = [
    { label: 'Total Protein', color: '#2d6efd' },
    { label: 'Total Carbs', color: '#81b4fe' },
    { label: 'Total Fats', color: '#dee2e6' },
  ];

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
            {macroData.length > 0 && (
              <VictoryChart width={800} domainPadding={50} theme={VictoryTheme.material} >
                <VictoryAxis tickValues={macroData.map((data) => data.entryDate)} tickFormat={(date) => formatDate(date)} />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}g`} />
                <VictoryStack colorScale={["#2d6efd", "#81b4fe", "#dee2e6"]}>
                  <VictoryBar data={macroData} x="entryDate" y="totalProtein" />
                  <VictoryBar data={macroData} x="entryDate" y="totalCarbs" />
                  <VictoryBar data={macroData} x="entryDate" y="totalFats" />
                </VictoryStack>
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
