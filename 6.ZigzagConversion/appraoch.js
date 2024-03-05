var convert = function (s, numRows) {
  let resultMap = new Map();
  let i = 0;
  let rowCount = 0;
  let isUp = false;
  while (s.length > i) {
    if (isUp) {
      if (resultMap.has(rowCount)) {
        let pre = resultMap.get(rowCount);
        pre += s[i];
        resultMap.set(rowCount, pre);
      } else {
        resultMap.set(rowCount, s[i]);
      }
      rowCount--;
    } else {
      if (resultMap.has(rowCount)) {
        let pre = resultMap.get(rowCount);
        pre += s[i];
        resultMap.set(rowCount, pre);
      } else {
        resultMap.set(rowCount, s[i]);
      }
      rowCount++;
    }
    if (rowCount == 0) {
      isUp = false;
    }
    if (rowCount == numRows - 1) {
      isUp = true;
    }
    i++;
  }

  let result = "";
  for (let x of resultMap.values()) {
    result += x;
  }
  return result;
};

console.log("Test Case 1:", convert("PAYPALISHIRING", 3));
console.log("Test Case 2:", convert("PAYPALISHIRING", 4));
console.log("Test Case 3:", convert("A", 1));
