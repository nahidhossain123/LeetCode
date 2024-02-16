var findLeastNumOfUniqueInts = function (arr, k) {
  let hashMapArray = new Map();
  let sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (hashMapArray.has(arr[i])) {
      hashMapArray.set(arr[i], hashMapArray.get(arr[i]) + 1);
    } else {
      hashMapArray.set(arr[i], 1);
    }
  }
  const mapSort = new Map(
    [...hashMapArray.entries()].sort((a, b) => a[1] - b[1])
  );
  let count = 0;
  for (const x of mapSort.keys()) {
    if (count < k) {
      let remaining = k - count;
      if (remaining == mapSort.get(x)) {
        mapSort.delete(x);
        count += remaining;
      } else if (remaining > mapSort.get(x)) {
        count += mapSort.get(x);
        mapSort.delete(x);
      } else {
        mapSort.set(x, mapSort.get(x) - remaining);
        count += remaining;
      }
    } else {
      break;
    }
  }
  return mapSort.size;
};

console.log("Test Case 1:", findLeastNumOfUniqueInts([5, 5, 4], 1));
console.log("Test Case 2:", findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
