var numSubarraysWithSum = function (nums, goal) {
  let prefixSum = 0;
  let result = 0;
  let hashMap = new Map();
  hashMap.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    result += hashMap.get(prefixSum - goal) | 0;
    hashMap.set(prefixSum, (hashMap.get(prefixSum) || 0) + 1);
  }

  return result;
};

console.log("Test Case 1:", numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log("Test Case 2:", numSubarraysWithSum([0, 0, 0, 0, 0], 0));
