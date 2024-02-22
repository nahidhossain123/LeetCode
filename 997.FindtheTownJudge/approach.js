var findJudge = function (n, trust) {
  const inDegree = new Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    inDegree[a]--;
    inDegree[b]++;
  }
  for (let i = 1; i <= inDegree.length; i++) {
    if (inDegree[i] == n - 1) {
      return i;
    }
  }
  return -1;
};
let n = 2;
let trust = [[1, 2]];
console.log("Test Case 1:", findJudge(n, trust));
n = 3;
trust = [
  [1, 3],
  [2, 3],
];
console.log("Test Case 2:", findJudge(n, trust));
n = 3;
trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];
console.log("Test Case 3:", findJudge(n, trust));
