var customSortString = function (order, s) {
  let hashMap = new Map();
  for (char of s) {
    hashMap.set(char, (hashMap.get(char) | 0) + 1);
  }
  let str = "";
  for (char of order) {
    if (hashMap.has(char)) {
      str += char.repeat(hashMap.get(char));
      hashMap.delete(char);
    }
  }
  for (char of hashMap.keys()) {
    str += char.repeat(hashMap.get(char));
  }
  return str;
};

console.log("Test Case 1:", customSortString("cba", "abcd"));
console.log("Test Case 2:", customSortString("bcafg", "abcd"));
