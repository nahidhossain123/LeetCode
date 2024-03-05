var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      break;
    } else {
      while (left < right && s[left] == s[left + 1]) left++;
      while (left < right && s[right] == s[right - 1]) right--;
      left++;
      right--;
    }
  }
  if (left > right) return 0;
  return right - left + 1;
};

console.log("Test Case 1:", minimumLength("ca"));
console.log("Test Case 2:", minimumLength("cabaabac"));
console.log("Test Case 3:", minimumLength("aabccabba"));
