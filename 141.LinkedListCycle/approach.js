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

var hasCycle = function (head) {
  let slowPtr = head;
  let fastPtr = head;
  while (slowPtr != null && fastPtr != null && fastPtr.next != null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
    if (slowPtr == fastPtr) {
      return true;
    }
  }
  return false;
};

let arr = [3, 2, 0, -4];
let obj = new LinkedList();
let head = obj.createList(arr);
console.log("Test Case 1:", hasCycle(head));

let arr1 = [1, 2];
let obj1 = new LinkedList();
let head1 = obj1.createList(arr1);
console.log("Test Case 2:", hasCycle(head1));

let arr2 = [1, 2];
let obj2 = new LinkedList();
let head2 = obj1.createList(arr1);
console.log("Test Case 2:", hasCycle(head2));
