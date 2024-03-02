var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};

console.log("Test Case 1:", sortedSquares([-4, -1, 0, 3, 10]));
console.log("Test Case 2:", sortedSquares([-7, -3, 2, 3, 11]));
