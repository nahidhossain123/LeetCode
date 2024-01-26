var maxArea = function (height) {
  let max = 0;
  let area = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  console.log(leftPointer, rightPointer);
  while (leftPointer < rightPointer) {
    area =
      Math.min(height[rightPointer], height[leftPointer]) *
      (rightPointer - leftPointer);
    max = Math.max(area, max);
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return max;
};

console.log("Test Case 1:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("Test Case 2:", maxArea([1, 1]));
console.log("Test Case 3:", maxArea([2, 3, 4, 5, 18, 17, 6]));
console.log("Test Case 4:", maxArea([4, 3, 2, 1, 4]));
