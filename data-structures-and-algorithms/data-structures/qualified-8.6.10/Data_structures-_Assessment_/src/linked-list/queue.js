const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    // use `linkedList` so tests can spy on it
    this.linkedList = new LinkedList();
  }

  // add to the back of the queue
  enqueue(value) {
    this.linkedList.insert(value);
    return this;
  }

  // remove from the front of the queue
  dequeue() {
    // remove the head (index 0)
    return this.linkedList.remove((_, i) => i === 0);
  }

  // peek without removing
  peek() {
    return this.linkedList.head ? this.linkedList.head.value : undefined;
  }

  // true if no elements in queue
  isEmpty() {
    return this.linkedList.head === null;
  }

  // number of items in queue
  get size() {
    return this.linkedList.length;
  }
}

module.exports = Queue;