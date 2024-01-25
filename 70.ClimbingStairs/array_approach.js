var climbStairs = function (n) {
  let previousStep = 2;
  let steps = 3;
  if (n == 1 || n == 2 || n == 3) {
    return n;
  }
  for (let i = 4; i <= n; i++) {
    let temp = steps;
    steps += previousStep;
    previousStep = temp;
  }
  return steps;
};

console.log("Test Case 1:", climbStairs(3));
console.log("Test Case 1:", climbStairs(4));
console.log("Test Case 1:", climbStairs(5));
