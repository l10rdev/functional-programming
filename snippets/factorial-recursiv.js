function factorialRecursive(number) {
  if (number === 0n) {
    return 1n;
  }
  return factorialRecursive(number - 1n) * number;
}

// console.log(factorialRecursive(8798n));
