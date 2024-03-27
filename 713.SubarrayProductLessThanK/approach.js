var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let count = 0;
  let product = 1;

  while (end < nums.length) {
    product *= nums[end];
    while (product >= k) {
      product /= nums[start];
      start++;
    }
    count += end - start + 1;
    end++;
  }
  return count;
};

console.log("Test Case 1:", numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log("Test Case 2:", numSubarrayProductLessThanK([1, 2, 3], 0));
