const numberToAarray = (largeNumber) => {
  let digitList = [];
  while (largeNumber > 0) {
    digitList.unshift(largeNumber % BigInt(10));
    largeNumber = largeNumber / BigInt(10);
  }
  return digitList;
};

var plusOne = function (digits) {
  let largeNumber = "";
  let beforeZero = [];
  let beforeZeroArray = [];
  let afterZeroArray = [];

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] != 0) {
      largeNumber += digits[i];
      beforeZero.push(digits[i]);
    } else {
      if (digits[i + 1] >= 0) {
        beforeZero.push(digits[i]);
        beforeZeroArray = beforeZero.slice();

        largeNumber = "";
      } else {
        largeNumber += digits[i];
      }
    }
  }
  let num = BigInt(0);
  num = BigInt(largeNumber) + BigInt(1);
  //console.log(beforeZeroArray,num.toString())
  //beforeZeroArray=numberToAarray(beforeZero)
  afterZeroArray = numberToAarray(num);

  if (beforeZeroArray.length > 0) {
    return beforeZeroArray.concat(afterZeroArray);
  } else {
    return afterZeroArray;
  }
};

console.log("Test Case 1:", plusOne([1, 2, 3]));
console.log("Test Case 2:", plusOne([4, 3, 2, 1]));
console.log("Test Case 3:", plusOne([0]));
console.log("Test Case 4:", plusOne([1, 0]));
console.log(
  "Test Case 4:",
  plusOne([
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
  ])
);
console.log(
  "Test Case 6:",
  plusOne([
    6, 9, 0, 1, 0, 8, 7, 5, 9, 6, 2, 9, 9, 9, 3, 4, 7, 3, 6, 9, 8, 4, 3, 5, 6,
    8, 6, 3, 6, 6, 9, 2, 6, 2, 4, 8,
  ])
);
