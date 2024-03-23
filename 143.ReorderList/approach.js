const reversList = (node) => {
  let preNode = null;
  let currNode = node;
  let nextNode = null;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = preNode;
    preNode = currNode;
    currNode = nextNode;
  }
  return preNode;
};

var reorderList = function (head) {
  let firstNode = head;
  let slowPtr = head;
  let fastPtr = head.next;

  while (fastPtr && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  let reverseList = reversList(slowPtr.next);
  slowPtr.next = null;

  while (reverseList) {
    let temp1 = firstNode.next;
    let temp2 = reverseList.next;
    firstNode.next = reverseList;
    reverseList.next = temp1;
    firstNode = temp1;
    reverseList = temp2;
  }
};
