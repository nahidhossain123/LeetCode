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

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let ptr = result;
  let curry = 0;
  while (l1 != null || l2 != null) {
    sum = 0 + curry;
    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    curry = parseInt(sum / 10);
    sum = sum % 10;
    ptr.next = new ListNode(sum);
    ptr = ptr.next;
  }

  if (curry == 1) ptr.next = new ListNode(1);
  return result.next;
};

let arr = [2, 4, 3];
let obj = new LinkedList();
let head = obj.createList(arr);

let arr1 = [5, 6, 4];
let obj1 = new LinkedList();
let head1 = obj1.createList(arr1);

let result = addTwoNumbers(head, head1);
print(result);
