var findDuplicates = function (nums) {
  let absIndex = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    absIndex = Math.abs(nums[i]) - 1;
    if (nums[absIndex] < 0) {
      result.push(absIndex + 1);
    } else {
      nums[absIndex] = -nums[absIndex];
    }
  }
  return result;
};

console.log("Test Case 1:", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log("Test Case 2:", findDuplicates([1, 1, 2]));
console.log("Test Case 3:", findDuplicates([1]));
