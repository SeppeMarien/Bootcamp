import React, {useState } from 'react';
import useCounter from './UseCounter';

// bij functional component word de functie opnieuw aangemaakt bij een rerender.
const Counter = () => {

  // const [count, setCount] = useState(0);

  const [count, handleCount] = useCounter(0, 10, 2)

  return (
    <div>
      <p>you clikced {count} times</p>
      <button onClick={()=> handleCount()}>Click me!</button>
    </div>
  );
};

export default Counter;