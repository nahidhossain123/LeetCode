var maximumOddBinaryNumber = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      count++;
    }
  }
  if (count == 0) {
    return "";
  }
  let result = "";
  for (let i = 1; i < count; i++) {
    result += "1";
  }
  for (let i = 0; i < s.length - count; i++) {
    result += "0";
  }
  result += "1";
  return result;
};

console.log("Test Case 1:", maximumOddBinaryNumber("010"));
console.log("Test Case 2:", maximumOddBinaryNumber("0101"));
