var productExceptSelf = function (nums) {
  let leftSum = [];
  let rightSum = [];
  leftSum[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftSum[i] = leftSum[i - 1] * nums[i - 1];
  }
  rightSum[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] * nums[i + 1];
  }
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = leftSum[i] * rightSum[i];
  }
  return ans;
};

console.log("Test Case 1:", productExceptSelf([1, 2, 3, 4]));
console.log("Test Case 2:", productExceptSelf([-1, 1, 0, -3, 3]));
