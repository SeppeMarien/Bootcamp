function convertFrac(lst){
  //Your code here

  let newList = lst.map((value) => [...value]);
  let found = false;
  let highest = 0;
  let newHighest = 0
  let multiplier = 1;
  let returnValue = "";

  for (let i = 0; i < newList.length; i++) {
    if(newList[i][1] > highest){
      highest = newList[i][1];
    }
  }  
  
  newHighest = highest;
  
  loopSearch:
  while(found !== true) {
    loopPairs:
    for (let i = 0; i < newList.length; i++) {
      loopItem:
      for (let j = 1; newList[i][1] * j <= newHighest; j++) {
        if((newList[i][1] * j) === newHighest) {
          newList[i][0] *= j;
          newList[i][1] *= j;
          continue loopPairs;
        }
      }

      newList = lst.map((value) => [...value]);
      multiplier++;
      newHighest = highest * multiplier;

      continue loopSearch;
    }
    found = true;
  }

  for (let i = 0; i < newList.length; i++) {
    returnValue += `(${newList[i][0]},${newList[i][1]})`
  }

  return returnValue;
}

console.log( convertFrac([ [1, 2], [1, 3], [1, 4] ]));
