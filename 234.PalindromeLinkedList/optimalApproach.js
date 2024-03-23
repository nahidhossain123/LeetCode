const reverseLinkedList = (list) => {
  let prevNode = null;
  let currNode = list;
  let nextNode = null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

var isPalindrome = function (head) {
  let slowPtr = head;
  let fastPtr = head.next;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  let reverseList = reverseLinkedList(slowPtr);
  slowPtr.next = null;
  let firstPtr = head;

  while (firstPtr) {
    if (firstPtr.val != reverseList.val) {
      return false;
    }
    firstPtr = firstPtr.next;
    reverseList = reverseList.next;
  }
  return true;
};
