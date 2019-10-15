import React, { useState } from 'react';

const useCounter = (start, stop, step) => {

  const [count, setCount] = useState(start);

  const handleCount = () => {
    if(count === stop) {
      return setCount(start);
    }

    return setCount(count + step );
  }
  return [count, handleCount];
};

export default useCounter;