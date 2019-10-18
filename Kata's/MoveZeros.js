var moveZeros = function (arr) {
  // TODO: Program me

  const original = [...arr];

  let timesZero = 0;

  const zerosAtEnd = original.filter((value) => {
    
    if(value !== false && value === 0) {
      timesZero++;
      return false;
    }

    return true;
  })

  for (let i = 0; i < timesZero; i++) {
    zerosAtEnd.push(0);
  }

  return zerosAtEnd;
}

console.log(moveZeros([false,1,0,null,2,0,{},3,"a"]));
console.log(Number(null));

