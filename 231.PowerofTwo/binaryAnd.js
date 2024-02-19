var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
console.log("Test Case 1:", isPowerOfTwo(1));
console.log("Test Case 2:", isPowerOfTwo(16));
console.log("Test Case 3:", isPowerOfTwo(3));
