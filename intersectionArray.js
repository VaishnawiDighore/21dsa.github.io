var num1 =[9,5,5,9]
var num2 =[5,5];
let intersection = num1.filter((curElem)=>{
  return num2.includes(curElem);

});
console.log([...new Set(intersection)].reverse());