var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] == words[i].split("").reverse().join("")) {
      return words[i];
    }
  }
  return "";
};

console.log(
  "Test Case 1:",
  firstPalindrome(["abc", "car", "ada", "racecar", "cool"])
);
console.log("Test Case 2:", firstPalindrome(["notapalindrome", "racecar"]));
console.log("Test Case 3:", firstPalindrome(["def", "ghi"]));
