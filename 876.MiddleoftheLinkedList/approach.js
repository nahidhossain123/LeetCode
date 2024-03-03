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

var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer != null && fastPointer.next != null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

let arr = [1, 2, 3, 4, 5];
let obj = new LinkedList();
let head = obj.createList(arr);
let result = middleNode(head);
print(result);

let arr1 = [1, 2, 3, 4, 5, 6];
let obj1 = new LinkedList();
let head1 = obj1.createList(arr1);
let result1 = middleNode(head1);
print(result);
