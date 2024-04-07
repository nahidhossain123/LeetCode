var checkValidString = function (s) {
  let extraParenthesis = [];
  let asteriks = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      extraParenthesis.push(i);
    } else if (s[i] == "*") {
      asteriks.push(i);
    } else {
      if (extraParenthesis.length > 0) {
        extraParenthesis.pop();
      } else if (asteriks.length > 0) {
        asteriks.pop();
      } else {
        return false;
      }
    }
  }

  while (extraParenthesis.length > 0) {
    if (asteriks.length == 0) {
      return false;
    }
    if (extraParenthesis.pop() > asteriks.pop()) {
      return false;
    }
  }
  return extraParenthesis.length == 0;
};

console.log("Test Case 1:", checkValidString("()"));
console.log("Test Case 2:", checkValidString("(*)"));
console.log("Test Case 3:", checkValidString("(*))"));
