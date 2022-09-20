// Sum Numbers
function sum (numbers) {
    "use strict";
  if (numbers.length==0)  {
    return 0;
  
  }
  let sum = 0;
   for (const element of numbers) {
     sum = sum + element;
   }
  return sum;
};