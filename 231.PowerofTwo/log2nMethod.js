var isPowerOfTwo = function (n) {
  if (Number.isInteger(Math.log2(n))) return true;
  return false;
};

console.log("Test Case 1:", isPowerOfTwo(1));
console.log("Test Case 2:", isPowerOfTwo(16));
console.log("Test Case 3:", isPowerOfTwo(3));
