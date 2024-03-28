var maxSubarrayLength = function (nums, k) {
  let hashMap = new Map();
  let start = 0;
  let end = 0;
  let maxSub = 0;
  while (end < nums.length) {
    hashMap.set(nums[end], (hashMap.get(nums[end]) | 0) + 1);
    while (hashMap.get(nums[end]) > k) {
      hashMap.set(nums[start], hashMap.get(nums[start], 0) - 1);
      start++;
    }
    maxSub = Math.max(maxSub, end - start + 1);
    end++;
  }
  return maxSub;
};

console.log("Test Case 1:", maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
console.log("Test Case 2:", maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
console.log("Test Case 3:", maxSubarrayLength([5, 5, 5, 5, 5, 5, 5]), 4);
