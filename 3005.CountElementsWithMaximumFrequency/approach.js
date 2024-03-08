var maxFrequencyElements = function (nums) {
  let resultMap = new Map();
  for (const num of nums) {
    resultMap.set(num, (resultMap.get(num) || 0) + 1);
  }
  const max = Math.max(...resultMap.values());
  const maxFrequencies = [...resultMap.values()].filter((freq) => freq == max);
  return maxFrequencies.length * max;
};

console.log("Test Case 1:", maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log("Test Case 2:", maxFrequencyElements([1, 2, 3, 4, 5]));
