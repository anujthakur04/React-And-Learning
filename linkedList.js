

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let count = 0;
        let curr = this.head;

        while (curr.next) {
            count++
            curr = curr.next;
        }
        return count;
    }


    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode

    }

    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error('Invalid')
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let curr = this.head;
        for (let i = 1; i < index - 1; i++) {
            curr = curr.next
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    removeTop() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head)
            return;

        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }

        curr.next = null;

    }

    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.error('Invalid')
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        newNode.next = curr.next;
        curr.next = newNode;

    }

    print() {
        let curr = this.head;

        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const Linkedlist = new LinkedList();


Linkedlist.addFirst(5);
Linkedlist.addFirst(3);
// Linkedlist.addFirst(8);
// Linkedlist.addLast(6);

// Linkedlist.removeTop();

// Linkedlist.addAt(2, 1);
// Linkedlist.removeLast();
Linkedlist.removeAt(0);
Linkedlist.print();