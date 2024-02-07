var groupAnagrams = function (strs) {
  const anagramGroup = new Map();

  for (let i = 0; i < strs.length; i++) {
    let sortedWord = strs[i].split("").sort().join("");
    if (anagramGroup.has(sortedWord)) {
      anagramGroup.get(sortedWord).push(strs[i]);
    } else {
      let singleGroup = [];
      singleGroup.push(strs[i]);
      anagramGroup.set(sortedWord, singleGroup);
    }
  }
  return Array.from(anagramGroup.values());
};

console.log(
  "Test Case 1:",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
console.log("Test Case 2:", groupAnagrams([""]));
console.log("Test Case 3:", groupAnagrams(["a"]));
