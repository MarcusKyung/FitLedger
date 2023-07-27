import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import WaterIntakeChart from './WaterIntakeChart';
import TotalCaloriesChart from './TotalCaloriesChart';
import MacrobreakdownChart from './MacrobreakdownChart';
import DailyWeightChart from './DailyWeightChart';
import CardioBubbleChart from './CardioBubbleChart';



export default function Victory() {
  return (
    <React.Fragment>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>7-14 Day Total Water Intake Chart</Accordion.Header>
          <Accordion.Body>
            <WaterIntakeChart />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>7-14 Day Total Caloric Intake Chart</Accordion.Header>
          <Accordion.Body>
            <TotalCaloriesChart />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>7-14 Day Macronutrient Intake Chart</Accordion.Header>
          <Accordion.Body>
            <MacrobreakdownChart />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>7-14 Day Daily Weight Chart</Accordion.Header>
          <Accordion.Body>
          <DailyWeightChart />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>7-14 Day Cardio Duration/Distance Chart</Accordion.Header>
          <Accordion.Body>
          <CardioBubbleChart />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
}
