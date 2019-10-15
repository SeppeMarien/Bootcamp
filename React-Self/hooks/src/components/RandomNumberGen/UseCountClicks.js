import React, {useState} from 'react';

const useCountClicks = () => {
  const [count, setCount] = useState(0);
  
  const _handleCount = () => {
    return setCount(count + 1);
  }
  
  return [count, _handleCount];
};

export default useCountClicks;