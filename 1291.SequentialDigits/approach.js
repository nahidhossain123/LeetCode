const findSequentialDigit = (num, i, results, low, high) => {
  if (low <= num && num <= high) {
    results.push(num);
  }
  if (i > 9 || num > high) {
    return;
  }
  findSequentialDigit(num * 10 + i, i + 1, results, low, high);
};

const sequentialDigits = (low, high) => {
  let results = [];
  for (let i = 0; i <= 9; i++) {
    findSequentialDigit(0, i, results, low, high);
  }
  return results.sort((a, b) => a - b);
};

console.log("Test Case 1:", sequentialDigits(100, 300));
console.log("Test Case 2:", sequentialDigits(1000, 13000));
