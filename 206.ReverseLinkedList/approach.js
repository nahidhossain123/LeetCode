var reverseList = function (head) {
  const stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  let reverseList = new ListNode(0);
  let ptr = reverseList;
  while (stack.length > 0) {
    ptr.next = new ListNode(stack.pop());
    ptr = ptr.next;
  }
  return reverseList.next;
};

console.log("Test Case 1:", reverseList([1, 2, 3, 4, 5]));
console.log("Test Case 2:", reverseList([1, 2]));
