function multiplyByTwo(value) {
  let number = 2;
  function inner(){
   return  value * number;
  }
  return inner;
}

// Examples
console.log(multiplyByTwo(4)());
console.log(multiplyByTwo(6)());

