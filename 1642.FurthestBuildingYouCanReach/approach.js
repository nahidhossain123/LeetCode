var furthestBuilding = function (H, B, L) {
  let len = H.length - 1,
    pq = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < len; i++) {
    let diff = H[i + 1] - H[i];
    if (diff > 0) {
      if (L > 0) pq.enqueue(diff), L--;
      else if (pq.front() && diff > pq.front().element)
        pq.enqueue(diff), (B -= pq.dequeue().element);
      else B -= diff;
      if (B < 0) return i;
    }
  }
  return len;
};

console.log("Test Case 1:", furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));
console.log(
  "Test Case 2:",
  furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)
);
console.log("Test Case 3:", furthestBuilding([14, 3, 19, 3], 17, 0));
