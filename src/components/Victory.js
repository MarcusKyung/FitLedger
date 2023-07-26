import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

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
    if (value > 100) {
      return "green"; // If water intake is over 100 oz, set the color to green
    } else if (value < 50) {
      return "red"; // If water intake is under 50 oz, set the color to red
    } else {
      return "orange"; // For values in between, set the color to orange
    }
  };

  return (
    <React.Fragment>
      <div style={{ width: "700px" }}>
        <h1>Past 7 Day Water Intake</h1>
        <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
          <VictoryAxis tickValues={["-6", "-5", "-4", "-3", "-2", "-1", "Today"]} />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1}oz`} />
          <VictoryStack colorScale="warm">
            <VictoryBar data={selectedDayMinusSix} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake), }, }} />
            <VictoryBar data={selectedDayMinusFive} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake),  }, }} />
            <VictoryBar data={selectedDayMinusFour} x="date" y="waterIntake" style={{ data: { fill: ({ datum }) => getColor(datum.waterIntake), 
                },
              }}
            />
            <VictoryBar
              data={selectedDayMinusThree}
              x="date"
              y="waterIntake"
              style={{
                data: {
                  fill: ({ datum }) => getColor(datum.waterIntake), // Set the fill color based on the water intake value
                },
              }}
            />
            <VictoryBar
              data={selectedDayMinusTwo}
              x="date"
              y="waterIntake"
              style={{
                data: {
                  fill: ({ datum }) => getColor(datum.waterIntake), // Set the fill color based on the water intake value
                },
              }}
            />
            <VictoryBar
              data={selectedDayMinusOne}
              x="date"
              y="waterIntake"
              style={{
                data: {
                  fill: ({ datum }) => getColor(datum.waterIntake), // Set the fill color based on the water intake value
                },
              }}
            />
            <VictoryBar
              data={selectedDay}
              x="date"
              y="waterIntake"
              style={{
                data: {
                  fill: ({ datum }) => getColor(datum.waterIntake), // Set the fill color based on the water intake value
                },
              }}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    </React.Fragment>
  );
};

export default Main;
