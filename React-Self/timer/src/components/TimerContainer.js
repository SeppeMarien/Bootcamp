import React, { Fragment, useState } from 'react';
import Timer from './Timer';
import TimerLifeCycle from './TimerLifeCycle';

const TimerContainer = (props) => {
  const [showTimer, setShowTimer] = useState(true);
  const [timerInterval, setTimerInterval] = useState(1000);

  const _Toggle = () => {
     setShowTimer(!showTimer);
     
  }

  const _Speedup = () => {
    setTimerInterval(timerInterval - 200);
  }
  
  const _SpeedDown = () => {
    setTimerInterval(timerInterval + 200);
  }

  return (
    <Fragment>
      {showTimer && <Timer timerInterval={timerInterval}  />}
      <div>
        <button onClick={e => _Toggle()}>Toggle</button> <br />
        <button onClick={e => _Speedup()}>Speedup</button>
        <button onClick={e => _SpeedDown()}>SpeedDown</button>
      </div>
    </Fragment>
  ) 
}

export default TimerContainer;