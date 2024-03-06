var convert = function (s, numRows) {
  if (s.length < 3 || numRows == 1) {
    return s;
  }
  let i = 0,
    j = 0;
  let result = new Array(numRows).fill("");
  while (i < s.length) {
    while (j < numRows && i < s.length) {
      result[j++] += s[i++];
    }
    if (j == numRows) {
      j = numRows - 2;
    }
    while (j >= 0 && i < s.length) {
      result[j--] += s[i++];
    }
    if (j == -1) {
      j = 1;
    }
  }
  let res = "";
  for (let i = 0; i < result.length; i++) {
    res += result[i];
  }
  return res;
};

console.log("Test Case 1:", convert("PAYPALISHIRING", 3));
console.log("Test Case 2:", convert("PAYPALISHIRING", 4));
console.log("Test Case 3:", convert("A", 1));
