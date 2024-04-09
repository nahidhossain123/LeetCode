var timeRequiredToBuy = function (tickets, k) {
  let result = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] >= tickets[k]) {
      result += tickets[k];
    } else {
      result += tickets[i];
    }
    if (i > k && tickets[k] <= tickets[i]) result--;
  }
  return result;
};

console.log("Test Case 1:", timeRequiredToBuy([2, 3, 2], 2));
console.log("Test Case 2:", timeRequiredToBuy([5, 1, 1, 1], 0));
