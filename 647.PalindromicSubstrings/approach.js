const findPalindrome = (l, r, s) => {
  let result = 0;
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    result++;
    l--;
    r++;
  }
  return result;
};

const findPalindromicSubstring = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += findPalindrome(i, i, s);
    result += findPalindrome(i, i + 1, s);
  }
  return result;
};

console.log("Test Case 1:", findPalindromicSubstring("abc"));
console.log("Test Case 2:", findPalindromicSubstring("aaa"));
