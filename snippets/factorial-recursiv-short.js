function factorialRecursive(number) {
  return number > 1n ? factorialRecursive(number - 1n) * number : 1n;
}
