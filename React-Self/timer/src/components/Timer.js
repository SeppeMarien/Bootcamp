import React, { Fragment, useState, useEffect, useRef } from 'react';

const Timer = (props) => {
  const [count, setCount] = useState(0);
  let counter = useRef();

  const _Count = () => {
    let timer = 0;
    
    counter.current = window.setInterval(() => {  
      setCount(cnt => cnt + 1);
    }, props.timerInterval);
  }

  useEffect(() => {    
    if(counter.current && counter.current !== '') {
      _Pause();
      _Count();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.timerInterval])

  useEffect(() => {
    return console.log('test');
  }, [])

  const _Pause = () => {
    window.clearInterval(counter.current);
    counter.current = '';
  }

  const _Reset = () => {
    setCount(0);
    _Pause();
  }

    return (
      <Fragment>
      <div>
        <h1>{count}</h1>
        <button onClick={e => _Count()}>Start</button>
        <button onClick={e => _Pause()}>Stop</button>
        <button onClick={e => _Reset()}>Reset</button>
      </div>
      </Fragment>
    )
  }

export default Timer;