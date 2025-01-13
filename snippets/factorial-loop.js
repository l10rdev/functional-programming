function factorialIterative(number) {
  let result = 1n;
  for (let i = 2n; i < number; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(10n));
