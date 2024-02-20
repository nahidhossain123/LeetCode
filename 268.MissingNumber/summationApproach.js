var missingNumber = function (nums) {
  let sum = nums.length * ((nums.length + 1) / 2);
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
  }
  return sum;
};

console.log("Test Case 1:", missingNumber([3, 0, 1]));
console.log("Test Case 2:", missingNumber([0, 1]));
console.log("Test Case 3:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
