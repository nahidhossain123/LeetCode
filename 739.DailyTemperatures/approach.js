const dailyTemperatures = (temperatures) => {
  let results = new Array(temperatures.length).fill(0);
  let stack = [];
  let i = temperatures.length - 1;
  while (i >= 0) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
      stack.shift();
    }

    if (stack.length > 0) {
      results[i] = stack[0] - i;
    }
    stack.unshift(i);
    i--;
  }
  return results;
};

console.log(
  "Test Case 1:",
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
);
console.log("Test Case 2:", dailyTemperatures([30, 40, 50, 60]));
console.log("Test Case 3:", dailyTemperatures([30, 60, 90]));
