import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  { quarter: 1, earnings: 10000 },

];

const data2013 = [
  { quarter: 2, earnings: 15000 },
];

const data2014 = [
  { quarter: 3, earnings: 20000 },
];


const Main = () => {
  return (
    
    <div style={{ width: "500px"}}>
      <h1>Victory Tutorial</h1>
      <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3"]} />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryStack colorScale="warm">
          <VictoryBar data={data2012} x="quarter" y="earnings" />
          <VictoryBar data={data2013} x="quarter" y="earnings" />
          <VictoryBar data={data2014} x="quarter" y="earnings" />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default Main;
