var firstUniqChar = function (s) {
  const uniqueStrings = new Map();
  let firstUniqueString = -1;
  for (let i = 0; i < s.length; i++) {
    if (uniqueStrings.has(s[i])) {
      let val = uniqueStrings.get(s[i]);
      uniqueStrings.set(s[i], val + 1);
    } else {
      uniqueStrings.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (uniqueStrings.get(s[i]) == 1) {
      firstUniqueString = i;
      break;
    }
  }
  return firstUniqueString;
};

console.log("Test Case 1:", firstUniqChar("leetcode"));
console.log("Test Case 2:", firstUniqChar("loveleetcode"));
console.log("Test Case 3:", firstUniqChar("aabb"));
