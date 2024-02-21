var rangeBitwiseAnd = function (left, right) {
  let count = 0;
  while (left != right) {
    left >>= 1;
    right >>= 1;
    count++;
  }
  return left << count;
};

console.log("Test Case 1:", rangeBitwiseAnd(5, 7));
console.log("Test Case 2:", rangeBitwiseAnd(0, 0));
console.log("Test Case 3:", rangeBitwiseAnd(1, 2147483647));
