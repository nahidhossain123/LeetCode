var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  const DFS = (i, j, s) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return false;
    }
    if (board[i][j] != word[s] || board[i][j] === "*") {
      return false;
    }
    if (s == word.length - 1) return true;
    const cache = board[i][j];
    board[i][j] = "*";
    const isExist =
      DFS(i + 1, j, s + 1) ||
      DFS(i - 1, j, s + 1) ||
      DFS(i, j + 1, s + 1) ||
      DFS(i, j - 1, s + 1);
    board[i][j] = cache;
    return isExist;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (DFS(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

console.log(
  "Test Case 1:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  "Test Case 2:",
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
