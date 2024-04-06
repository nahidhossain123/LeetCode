var minRemoveToMakeValid = function (s) {
  let count = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      count++;
    } else if (s[i] == ")") {
      if (count == 0) {
        s = s.substring(0, i) + "#" + s.substring(i + 1);
      } else {
        count--;
      }
    }
  }
  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ")") {
      count++;
    } else if (s[i] == "(") {
      if (count == 0) {
        s = s.substring(0, i) + "#" + s.substring(i + 1);
      } else {
        count--;
      }
    }
  }

  return s.replaceAll("#", "");
};

console.log("Test Case 1:", minRemoveToMakeValid("lee(t(c)o)de)"));
console.log("Test Case 2:", minRemoveToMakeValid("a)b(c)d"));
