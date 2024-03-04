var bagOfTokensScore = function (tokens, power) {
  let sortedTokens = tokens.sort((a, b) => a - b);
  let i = 0;
  let j = tokens.length - 1;
  let score = 0;
  let result = 0;
  while (i <= j) {
    if (sortedTokens[i] <= power) {
      score++;
      if (result < score) {
        result = score;
      }
      power -= sortedTokens[i];
      i++;
    } else if (score > 0) {
      power += sortedTokens[j];
      score--;
      j--;
    } else {
      break;
    }
  }
  return result;
};

console.log("Test Case 1:", bagOfTokensScore([100], 50));
console.log("Test Case 2:", bagOfTokensScore([200, 100], 150));
console.log("Test Case 3:", bagOfTokensScore([100, 200, 300, 400], 200));
