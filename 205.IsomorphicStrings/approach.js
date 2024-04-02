var isIsomorphic = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let hashMap1 = new Map();
  let hashMap2 = new Map();
  for (let i = 0; i < s.length; i++) {
    let original = s[i];
    let replace = t[i];
    if (!hashMap1.has(original)) {
      if (!hashMap2.has(replace)) {
        hashMap1.set(original, replace);
        hashMap2.set(replace, replace);
      } else {
        return false;
      }
    } else {
      original = hashMap1.get(original);
      if (original != replace) {
        return false;
      }
    }
  }
  return true;
};

console.log("Test Case 1:", isIsomorphic([3, 2, 3]));
console.log("Test Case 2:", isIsomorphic([2, 2, 1, 1, 1, 2, 2]));
