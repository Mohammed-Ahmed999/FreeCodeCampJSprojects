"use strict";
function sumAll(arrOf) {
let  minNum = Math.min(...arrOf);
let  maxNum = Math.max(...arrOf);
  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  };
  return sum;
}
console.log(sumAll([1,4]))