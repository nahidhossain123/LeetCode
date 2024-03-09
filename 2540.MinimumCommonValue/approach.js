var getCommon = function (nums1, nums2) {
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] == nums2[right]) {
      return nums1[left];
    }
    if (nums1[left] < nums2[right]) {
      left++;
    } else {
      right++;
    }
  }
  return -1;
};

console.log("Test Case 1:", getCommon([1, 2, 3], [2, 4]));
console.log("Test Case 2:", getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
