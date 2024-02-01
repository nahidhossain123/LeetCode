const divideArray = (nums, k) => {
  let sortedArray = nums.sort((a, b) => a - b);
  let results = [];
  let i = 0;
  while (i < nums.length) {
    if (sortedArray[i + 2] - sortedArray[i] <= k) {
      results.push([sortedArray[i], sortedArray[i + 1], sortedArray[1 + 2]]);
      i += 3;
    } else {
      return [];
    }
  }
  return results;
};

console.log("Test Case 1:", divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
console.log("Test Case 2:", divideArray([1, 3, 3, 2, 7, 3], 3));
console.log(
  "Test Case 3:",
  divideArray([33, 26, 4, 18, 16, 24, 24, 15, 8, 18, 34, 20, 24, 16, 3], 16)
);
