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

var removeZeroSumSublists = function (head) {
  let dummyNode = new ListNode(0);
  let hashMap = new Map();
  let prefix = 0;
  hashMap.set(prefix, dummyNode);
  dummyNode.next = head;
  while (head != null) {
    prefix += head.val;
    if (hashMap.has(prefix)) {
      let start = hashMap.get(prefix);
      let temp = start;
      let pSum = prefix;
      while (temp != head) {
        temp = temp.next;
        pSum += temp.val;
        if (temp != head) {
          hashMap.delete(pSum);
        }
      }
      start.next = temp.next;
    } else {
      hashMap.set(prefix, head);
    }
    head = head.next;
  }
  return dummyNode.next;
};

let arr = [1, 2, -3, 3, 1];
let obj = new LinkedList();
let head = obj.createList(arr);
let result = removeZeroSumSublists(head);
print(result);

let arr1 = [1, 2, 3, -3, 4];
let obj1 = new LinkedList();
let head1 = obj1.createList(arr1);
let result1 = removeZeroSumSublists(head1);
print(result1);
