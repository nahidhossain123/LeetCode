var rearrangeArray = function (nums) {
  const positiveArray = [];
  const negativeArray = [];
  const resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveArray.push(nums[i]);
    } else {
      negativeArray.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length / 2; i++) {
    resultArray.push(positiveArray[i]);
    resultArray.push(negativeArray[i]);
  }
  return resultArray;
};

console.log("Test Case 1:", rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log("Test Case 2:", rearrangeArray([-1, 1]));
