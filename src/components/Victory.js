import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Card, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { db } from "./../firebase.js";
import { getDocs, collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';



export default function Victory() {
  const [waterIntakeData, setWaterIntakeData] = useState([]);
  

  useEffect(() => {
    const fetchWaterIntake = async () => {
      try {
        const CollectionRef = collection(db, 'data');
        const queryRef = query(CollectionRef, orderBy('entryDate', 'desc'), limit(7));
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
    const queryRef = query(CollectionRef, orderBy('entryDate', 'desc'), limit(7));
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => doc.data());
      const reversed = documents.reverse();
      setWaterIntakeData(reversed);
      console.log(reversed);
    });

    return () => unsubscribe();
  }, []);

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
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${month}-${day}`;
  };

  return (
    <React.Fragment>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>7 Day Water Intake Trend Data</Accordion.Header>
          <Accordion.Body>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <div style={{ height: '50vh' }}>
                      <VictoryChart width={600} domainPadding={25} theme={VictoryTheme.material} >
                        <VictoryAxis tickValues={waterIntakeData.map((data) => data.entryDate)} tickFormat={(date) => formatDate(date)} />
                        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}oz`} />
                        <VictoryBar barRatio={0.5} data={waterIntakeData} x="entryDate" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake) } }} />
                      </VictoryChart>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                      {legendData.map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                          <div style={{ width: '20px', height: '20px', backgroundColor: item.color, marginRight: '5px', }}></div>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
}
