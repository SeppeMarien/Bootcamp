var sum_pairs=function(ints, s){
  //your code here
  const numbersList = [...ints];
  let result;
  let lastRange;
  const needToFind = {};
  for (let i = 0; i < numbersList.length; i++) {
    //if(!numbersList[i+1]) continue;
    
    if(needToFind[numbersList[i]] ||needToFind[numbersList[i]] === 0){   
      if(!result){
        result = [s - needToFind[numbersList[i]], numbersList[i]]
        lastRange = 1;
        continue
      }

      if( lastRange > i) {
        result = [s - needToFind[numbersList[i]], numbersList[i]]
        lastRange = 1;
      }


    }

    if(!needToFind[s- numbersList[i]]){
      needToFind[s- numbersList[i]] = s- numbersList[i];
      continue;
    }
    
  }
  return result ? result : undefined;
}

let elements = [];

for (let i = 0; i < 100000; i++) {
  elements.push((Math.random() * 100) + 1);
}

console.time("sum_pairs");
console.log(sum_pairs([0, 2, 0], 0));
console.timeEnd("sum_pairs")

//starter react