import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import Card from "react-bootstrap/Card";

const selectedDay = [
  { date: 7, waterIntake: 50 },
];

const selectedDayMinusOne = [
  { date: 6, waterIntake: 150 },
];

const selectedDayMinusTwo = [
  { date: 5, waterIntake: 125 },
];

const selectedDayMinusThree = [
  { date: 4, waterIntake: 100 },
];

const selectedDayMinusFour = [
  { date: 3, waterIntake: 75 },
];

const selectedDayMinusFive = [
  { date: 2, waterIntake: 50 },
];

const selectedDayMinusSix = [
  { date: 1, waterIntake: 25 },
];

const Main = () => {
  const getColor = (value) => {
    if (value >= 100) {
      return "green"; // If water intake is over 100 oz, set the color to green
    } else if (value < 50) {
      return "red"; // If water intake is under 50 oz, set the color to red
    } else {
      return "orange"; // For values in between, set the color to orange
    }
  };

  const legendData = [
    { label: 'Water Intake >= 100 oz', color: 'green' },
    { label: 'Water Intake < 50 oz', color: 'red' },
    { label: 'Water Intake between 50 and 100 oz', color: 'orange' },
  ];

  return (
    <React.Fragment>
      
      <Card>
      <div style={{ width: "700px" }}>
        <h1>Last 7 Day Water Intake</h1>
        <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
          <VictoryAxis tickValues={["-6", "-5", "-4", "-3", "-2", "-1", "Today"]} />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}oz`} />
          <VictoryStack colorScale="warm">
            <VictoryBar data={selectedDayMinusSix} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake), }, }} />
            <VictoryBar data={selectedDayMinusFive} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake),  }, }} />
            <VictoryBar data={selectedDayMinusFour} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake), }, }} />
            <VictoryBar data={selectedDayMinusThree} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake),  }, }} />
            <VictoryBar data={selectedDayMinusTwo} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake),  }, }} />
            <VictoryBar data={selectedDayMinusOne} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake), }, }} />
            <VictoryBar data={selectedDay} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake),  }, }} />
          </VictoryStack>
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
      </Card>
    </React.Fragment>
  );
};

export default Main;
