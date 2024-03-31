var countSubarrays = function (nums, minK, maxK) {
  let count = 0;
  let minBound = -1;
  let maxBound = -1;
  let badBound = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      badBound = i;
    }
    if (nums[i] == minK) {
      minBound = i;
    }
    if (nums[i] == maxK) {
      maxBound = i;
    }
    count += Math.max(0, Math.min(minBound, maxBound) - badBound);
  }
  return count;
};

console.log("Test Case 1:", countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));
console.log("Test Case 2:", countSubarrays([1, 1, 1, 1], 1, 1));
