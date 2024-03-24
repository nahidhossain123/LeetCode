var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

console.log("Test Case 1:", findDuplicate([1, 3, 4, 2, 2]));
console.log("Test Case 2:", findDuplicate([3, 1, 3, 4, 2]));
console.log("Test Case 3:", findDuplicate([3, 3, 3, 3, 3]));

///solve using floyd warshall/ heare and tortoise algorithm solution
