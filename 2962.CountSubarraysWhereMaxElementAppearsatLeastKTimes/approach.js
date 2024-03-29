var countSubarrays = function (nums, k) {
  let start = 0;
  let end = 0;
  let count = 0;
  let maxEleCount = 0;
  let maxElement = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    maxElement = Math.max(maxElement, nums[i]);
  }
  while (end < nums.length) {
    if (nums[end] == maxElement) {
      maxEleCount++;
    }
    while (maxEleCount == k) {
      count = count + (nums.length - end);
      if (nums[start] == maxElement) {
        maxEleCount--;
      }
      start++;
    }
    end++;
  }

  return count;
};

console.log("Test Case 1:", countSubarrays([1, 3, 2, 3, 3], 2));
console.log("Test Case 2:", countSubarrays([1, 3, 2, 3, 3], 3));
