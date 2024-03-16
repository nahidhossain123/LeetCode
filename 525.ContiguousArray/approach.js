var findMaxLength = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums[i] = -1;
    }
  }
  let result = 0;
  let sum = 0;
  let mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum == 0) {
      result = Math.max(result, i + 1);
    }
    if (mp.has(sum)) {
      result = Math.max(result, i - mp.get(sum));
    } else {
      mp.set(sum, i);
    }
  }
  return result;
};

console.log("Test Case 1:", findMaxLength([0, 1]));
console.log("Test Case 2:", findMaxLength([1, 0, 1]));
