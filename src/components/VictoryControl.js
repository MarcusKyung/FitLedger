import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import WaterIntakeChart from './WaterIntakeChart';
import TotalCaloriesChart from './TotalCaloriesChart';



export default function Victory() {
  return (
    <React.Fragment>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>7/14 Day Total Water Intake Chart</Accordion.Header>
          <Accordion.Body>
            <WaterIntakeChart />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>7/14 Day Total Caloric Intake Chart</Accordion.Header>
          <Accordion.Body>
            <TotalCaloriesChart />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
}
