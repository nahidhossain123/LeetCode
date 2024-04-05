var makeGood = function (s) {
  let stack = [];
  for (char of s) {
    if (
      stack.length > 0 &&
      Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) == 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log("Test Case 1:", makeGood("leEeetcode"));
console.log("Test Case 2:", makeGood("abBAcC"));
