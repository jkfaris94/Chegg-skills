/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  let node = sortedLinkedList.head;
  while (node && node.next) {
    if (node.value === node.next.value) {
      // skip the duplicate
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return sortedLinkedList;
}

module.exports = removeDuplicates;
