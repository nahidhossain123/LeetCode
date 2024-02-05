var findErrorNums = function (nums) {
  let maps = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (maps.has(nums[i])) {
      maps.set(nums[i], maps.get(nums[i]) + 1);
    } else {
      maps.set(nums[i], 1);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (maps.has(i)) {
      if (maps.get(i) == 2) {
        result[0] = i;
      }
    } else {
      result[1] = i;
    }
  }
  return result;
};

console.log("Test Case 1:", findErrorNums([1, 2, 2, 4]));
console.log("Test Case 2:", findErrorNums([1, 1]));
