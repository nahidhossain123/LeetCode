var missingNumber = function (nums) {
  let xorAllNums = 0;
  for (let i = 0; i <= nums.length; i++) {
    xorAllNums = xorAllNums ^ i;
  }
  console.log(xorAllNums);
  for (let i = 0; i <= nums.length; i++) {
    xorAllNums = xorAllNums ^ nums[i];
  }
  return xorAllNums;
};

console.log("Test Case 1:", missingNumber([3, 0, 1]));
console.log("Test Case 2:", missingNumber([0, 1]));
console.log("Test Case 3:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
