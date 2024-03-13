var pivotInteger = function (n) {
  let x = Math.sqrt((n * (n + 1)) / 2);
  if (x % 1 !== 0) {
    return -1;
  } else {
    return Math.floor(x);
  }
};

console.log("Test Case 1:", pivotInteger(8));
console.log("Test Case 2:", pivotInteger(1));
