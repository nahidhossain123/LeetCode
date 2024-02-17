var findLeastNumOfUniqueInts = function (arr, k) {
  let hashMapArray = new Map();
  let sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    hashMapArray.set(arr[i], (hashMapArray.get(arr[i]) || 0) + 1);
  }
  const mapSort = Array.from(hashMapArray.values());
  mapSort.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < mapSort.length; i++) {
    if (k >= mapSort[i]) {
      k -= mapSort[i];
      count++;
    } else {
      return mapSort.length - count;
    }
  }
  return mapSort.length - count;
};

console.log("Test Case 1:", findLeastNumOfUniqueInts([5, 5, 4], 1));
console.log("Test Case 2:", findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
