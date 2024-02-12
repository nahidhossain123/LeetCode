const majorityElement = function (nums) {
  let candidate = 0;
  let voteCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (voteCount == 0) {
      candidate = nums[i];
    }
    if (nums[i] == candidate) {
      voteCount++;
    } else {
      voteCount--;
    }
  }
  return candidate;
};

console.log("Test Case 1:", majorityElement([3, 2, 3]));
console.log("Test Case 2:", majorityElement([2, 2, 1, 1, 1, 2, 2]));

//Boyer-Moore Majority voting algorithm
