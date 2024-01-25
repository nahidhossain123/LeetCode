var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (a[i]) sum += a[i] - "0";
    if (b[j]) sum += b[j] - "0";
    carry = sum > 1 ? 1 : 0;
    result += String(sum % 2);
    i--;
    j--;
  }
  if (carry) result += carry;
  let strToarray = result.split("");
  let reversedArray = strToarray.reverse();
  result = reversedArray.join("");

  return result;
};

console.log("Test Case 1:", addBinary("11", "1"));
console.log("Test Case 1:", addBinary("1010", "1011"));
