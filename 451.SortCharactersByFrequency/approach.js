var frequencySort = function (s) {
  let strings = s.split("");
  let stringMap = new Map();
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    if (stringMap.has(strings[i])) {
      stringMap.set(strings[i], stringMap.get(strings[i]) + 1);
    } else {
      stringMap.set(strings[i], 1);
    }
  }
  let sortedMap = new Map([...stringMap.entries()].sort((a, b) => b[1] - a[1]));
  sortedMap.forEach((value, key) => {
    if (value > 1) {
      result += key.repeat(value);
    } else {
      result += key;
    }
  });
  return result;
};

console.log("Test Case 1:", frequencySort("tree"));
console.log("Test Case 2:", frequencySort("cccaaa"));
console.log("Test Case 2:", frequencySort("Aabb"));
