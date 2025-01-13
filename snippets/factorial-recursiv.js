function factorialRecursive(number) {
  if (number === 0n) {
    return 1;
  }
  return factorialRecursive(number - 1n) * number;
}

// console.log(factorialRecursive(8798n));
