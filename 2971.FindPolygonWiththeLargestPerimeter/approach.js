var largestPerimeter = function (nums) {
  const sortedArray = nums.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i <= sortedArray.length - 1; i++) {
    total += sortedArray[i];
  }

  for (let i = sortedArray.length - 1; i >= 0; i--) {
    total = total - sortedArray[i];
    if (sortedArray[i] < total) {
      return total + sortedArray[i];
    }
  }
  return -1;
};

console.log("Test Case 1:", largestPerimeter([5, 5, 5]));
console.log("Test Case 2:", largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
console.log("Test Case 3:", largestPerimeter([5, 5, 50]));
