import React from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a"/>
    </div>
  );
}

export default App;
