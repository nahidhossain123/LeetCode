var isPalindrome = function (head) {
  let slowPtr = head;
  let fastPtr = head;
  let stack = [];
  while (fastPtr != null && fastPtr.next != null) {
    stack.push(slowPtr.val);
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  if (fastPtr != null) {
    slowPtr = slowPtr.next;
  }
  while (slowPtr) {
    if (slowPtr.val != stack.pop()) {
      return false;
    }
    slowPtr = slowPtr.next;
  }
  return true;
};

console.log("Test Case 1:", isPalindrome([1, 2, 2, 1]));
console.log("Test Case 2:", isPalindrome([1, 2]));
