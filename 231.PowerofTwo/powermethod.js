var isPowerOfTwo = function (n) {
  for (let i = 0; i < 31; i++) {
    let pow = Math.pow(2, i);
    if (pow == n) {
      return true;
    }
  }
  return false;
};

console.log("Test Case 1:", isPowerOfTwo(1));
console.log("Test Case 2:", isPowerOfTwo(16));
console.log("Test Case 3:", isPowerOfTwo(3));
