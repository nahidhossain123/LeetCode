const reverse = function (x) {
  let remainder = 0,
    reverse = 0;
  while (x != 0) {
    remainder = parseInt(x % 10);
    reverse = reverse * 10 + remainder;
    x = parseInt(x / 10);
  }
  if (Math.pow(-2, 31) > reverse || Math.pow(2, 31) - 1 < reverse) {
    return 0;
  } else {
    return reverse;
  }
};

console.log("Test Case 1:", reverse(123));
console.log("Test Case 2:", groupAnagrams(-123));
console.log("Test Case 3:", groupAnagrams(120));
