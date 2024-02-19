var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  let ceil = Math.ceil(Math.log2(n));
  let floor = Math.floor(Math.log2(n));
  if (ceil == floor) {
    return true;
  } else {
    return false;
  }
};

console.log("Test Case 1:", isPowerOfTwo(1));
console.log("Test Case 2:", isPowerOfTwo(16));
console.log("Test Case 3:", isPowerOfTwo(3));
