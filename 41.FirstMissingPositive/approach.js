var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] >= nums.length + 1) {
      nums[i] = nums.length + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) != nums.length + 1) {
      console.log(nums[Math.abs(nums[i]) - 1]);
      if (nums[Math.abs(nums[i]) - 1] > 0) {
        nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

console.log("Test Case 1:", firstMissingPositive([1, 2, 0]));
console.log("Test Case 2:", firstMissingPositive([3, 4, -1, 1]));
console.log("Test Case 3:", firstMissingPositive([7, 8, 9, 11, 12]));
