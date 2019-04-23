'use strict';

var num = 33721;
var result=1;
num = 3 * 3 * 7 * 2 * 1;
console.log(num);

var i=0;   
    

while (i < 3) {
  result= result * num;
  i++;
}

console.log(result.toString().slice(0,2));

