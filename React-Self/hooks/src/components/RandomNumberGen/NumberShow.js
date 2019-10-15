import React from 'react';
import useRandomNumbers from './UseRandomNumbers';
import useCountClicks from './UseCountClicks';

const NumberShow = () => {
  const [randomList, handleRandom, handleClearList] = useRandomNumbers(5, 0, 10);
  const [count, handleCount] = useCountClicks();

  const _handleClearButton = () => {
    handleClearList();
    handleCount();
  }

  return (
    <div>
      <button onClick={() => handleRandom()}>Generate random numbers!</button>
      <button onClick={() => _handleClearButton()}> clear list. cleared list {count} times!</button>
      <ul>
        {randomList && randomList.map((number) => <li>{number}</li> )}
      </ul>
    </div>
  );
};

export default NumberShow;