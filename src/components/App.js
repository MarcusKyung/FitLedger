import React from 'react';
import './App.css';
import Header from './Header';
import DataControl from './DataControl';
import DailyQuote from './DailyQuote';
// import VictoryTest from './VictoryTest'; //Will need to live in DataControl in order to use props

function App() {
  return (
    <React.Fragment>
    <Header />
    <DailyQuote />
    <DataControl />
    {/* <VictoryTest /> */}
    </React.Fragment>
  );
}

export default App;
