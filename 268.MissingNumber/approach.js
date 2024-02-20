var missingNumber = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length; i++) {
    if (i != sortedNums[i]) {
      return i;
    }
  }
};

console.log("Test Case 1:", missingNumber([3, 0, 1]));
console.log("Test Case 2:", missingNumber([0, 1]));
console.log("Test Case 3:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
