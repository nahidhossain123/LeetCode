var pivotInteger = function (n) {
  let totlaSum = (n * (n + 1)) / 2;
  let pSum = 0;
  for (let i = 1; i <= n; i++) {
    if (pSum == totlaSum - pSum - i) {
      return i;
    }
    pSum += i;
  }
  return -1;
};

console.log("Test Case 1:", pivotInteger(8));
console.log("Test Case 2:", pivotInteger(1));
