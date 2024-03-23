var reverseList = function (head) {
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return head;
  }
  let prevNode = null;
  let currNode = head;
  let nextNode = null;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};
