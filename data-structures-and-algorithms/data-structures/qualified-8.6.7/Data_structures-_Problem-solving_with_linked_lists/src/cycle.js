const cycle = (list) => {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // cycle detected
    }
  }

  return false; // no cycle
};

module.exports = cycle;
