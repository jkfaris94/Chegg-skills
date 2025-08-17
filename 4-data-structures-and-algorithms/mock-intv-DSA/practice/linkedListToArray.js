
    const linkedList = {
    value: 5,
    next: {
        value: 3,
        next: {
            value: 5, 
            next: null,
        },
    },
};

    const arr = [];
    let head = linkedList;


    while (head !== null) {
        arr.push(head.value)
        head = head.next;
    }

    console.log(arr);
    

