import React, {useState} from 'react';

const useRandomNumbers = (totalAmountOfNumbers, betweenStart, betweenStop) => {

  const [randomNumbersList, setRandomNumbers] = useState();

  const handleRandomGen = ()=> {
    const numberList= [];

    for (let i = 0; i < totalAmountOfNumbers; i++) {
      numberList.push(Math.floor((Math.random()*betweenStop) + betweenStart));
    }

    return setRandomNumbers(numberList);
  }

  const handleClearList = () => {
    return setRandomNumbers([]);
  }

  return [randomNumbersList, handleRandomGen, handleClearList];
};

export default useRandomNumbers;