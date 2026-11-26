function sumOfDigitProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    const d1 = n1 % 10;   // last digit of n1 (0 if n1 is exhausted)
    const d2 = n2 % 10;   // last digit of n2 (0 if n2 is exhausted)
    sum += d1 * d2;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

console.log(sumOfDigitProducts(6, 34));    // (6*4) + (0*3) = 24
console.log(sumOfDigitProducts(123, 456)); // (3*6)+(2*5)+(1*4) = 32