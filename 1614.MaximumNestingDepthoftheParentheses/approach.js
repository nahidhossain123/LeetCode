function maxDepth(s) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    }
    max = Math.max(count, max);
    if (s[i] === ")") {
      count--;
    }
  }
  return max;
}

console.log("Test Case 1:", maxDepth("(1+(2*3)+((8)/4))+1"));
console.log("Test Case 2:", maxDepth("(1)+((2))+(((3)))"));
