import { React, useState, useEffect } from "react";
import Header from './Header';
import DataControl from './DataControl';
import DailyQuote from './DailyQuote';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { auth } from "../firebase";
// import VictoryTest from './VictoryTest'; //Will need to live in DataControl in order to use props

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header />
      <DailyQuote />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<DataControl />} currentUser={currentUser}/>
      </Routes>
      {/* <VictoryTest /> */}
    </Router>
  );
}

export default App;
