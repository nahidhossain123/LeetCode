var myAtoi = function (s) {
  s = s.trim();
  if (s.length == 0) {
    return 0;
  }
  let num = 0;
  let i = 0;
  let sign = 1;
  if (s[i] == "+") {
    i++;
  } else if (s[i] == "-") {
    sign = -1;
    i++;
  }

  while (i < s.length && /^\d$/.test(s[i])) {
    num = num * 10 + (s[i] - "0"); //(s[i]-'0') converting char to integer
    i++;
  }
  num *= sign;
  //if number overflows
  num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));
  return num;
};

console.log("Test Case 1:", myAtoi("42"));
console.log("Test Case 2:", myAtoi("   -42"));
console.log("Test Case 3:", myAtoi("4193 with words"));
