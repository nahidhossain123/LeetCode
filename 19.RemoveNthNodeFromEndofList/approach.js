class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this.head;
  }

  createList(arr) {
    this.head = null;
    let head;
    for (let i = 0; i < arr.length; i++) {
      head = this.insertLast(arr[i]);
    }
    return this.head;
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}
function print(head) {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
}
function removeNthFromEnd(head, n) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let leftPointer = dummyNode;
  let rightPointer = dummyNode;

  for (let i = 0; i < n; i++) {
    rightPointer = rightPointer.next;
  }

  while (rightPointer.next != null) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }
  leftPointer.next = leftPointer.next.next;
  return dummyNode.next;
}

let arr = [1, 2, 3, 4, 5];
let obj = new LinkedList();
let head = obj.createList(arr);
let afterRemove = removeNthFromEnd(head, 2);
print(afterRemove);
