const numberStrings = ['42', '1337', '10000'];

const numbersA = numberStrings.map((numberString) => parseInt(numberString));
console.log(numbersA); // [ 42, 1337, 10000 ]

const numbersB = numberStrings.map(parseInt);
console.log(numbersB); // [ 42, 1337, 10000 ]

const numbersC = numberStrings.map((numberString, index, array) => {
  return parseInt(numberString, index, array);
});
console.log(numbersC); // [ 42, NaN, 16 ]
