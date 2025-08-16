class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node 
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node 
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty then make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
        
            current.next = node;
        }

        this.size++;
    }

    //insert at index
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        //if first index 
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //node before the index
            count ++;
            current = current.next; // node after the index
        }

        node.next = current;
        previous.next = node; // set previous to node

        this.size++;
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    //remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            console.log("out of range homie");
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // self practice remove last 
    removeLast() {
        if(!this.head) {
            console.log("no list exists")
            return;
        }

        let secondLast = this.head;
        while(secondLast.next.next) {
            secondLast = secondLast.next;
        }

        secondLast.next = null;

        return;
    }

    //clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //print list data 
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 4);

// ll.removeAt(10);
// ll.clearList();
ll.removeLast();

ll.printListData();
// ll.getAt(10);