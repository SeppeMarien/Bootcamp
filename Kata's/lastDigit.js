var lastDigit = function(str1, str2){
  if(str2 === 0) return 1;

  const str1splitted = str1.split('');
  const str2splitted = str2.split('');
  
  let rest1 = Number(str1splitted[str1splitted.length - 1]);
  let rest2 = Number(str2splitted[str2splitted.length - 1]);
  
  if(rest1 === 0 ) return 0;
  if(rest2 === 0 ) rest2 = str2/10;
  if(rest1 === 1 ) rest1 = Number((str1) % 50);
  if(rest2 === 1 ) rest2 = Number(str2splitted[str2splitted.length - 2] + str2splitted[str2splitted.length - 1]) % 20;

  const pow = (Math.pow(rest1, rest2));

  const strPow = pow.toString().split('');
  return Number(strPow[strPow.length -1]);
}

console.log(lastDigit("34", "0"));


