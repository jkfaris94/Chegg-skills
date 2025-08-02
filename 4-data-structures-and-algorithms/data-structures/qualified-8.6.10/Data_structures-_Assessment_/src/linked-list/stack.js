/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
    return this;
  }

  pop() {
    // remove the head of the list
    return this.linkedList.remove((_, i) => i === 0);
  }

  peek() {
    return this.linkedList.head ? this.linkedList.head.value : undefined;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }
}

module.exports = Stack;
