// Insert at head of the linked list
// const LinkedList = require("./linkedList");

// const linkedList = new LinkedList();

// linkedList.insertAtHead("One");
// linkedList.insertAtHead(2);

// console.log(linkedList);


// Insert at tail of the linked list
// const LinkedList = require("./linkedList");

// const linkedList = new LinkedList();

// linkedList.insert("One");
// linkedList.insert(2);

// console.log(linkedList);



// using find() 
const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insert("One");
linkedList.insert(2);

// You can use `find()` to update the value of a node in the list.
// linkedList.find((node) => node.value === "One").value = 1;
// updated to insert a new value between "One" and 2
linkedList.insert(1.5, (node) => node.value === "One");

console.log(linkedList);

console.log(
  "find 2",
  linkedList.find((node) => node.value === 2)
);

console.log(
  "find 3",
  linkedList.find((node) => node.value === 3)
);


// Removing an item from the list requires finding the node before the node that you're removing, 
// and then updating its next reference to skip over the removed node.
