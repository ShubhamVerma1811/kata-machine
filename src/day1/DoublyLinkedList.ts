class Node<T> {
    next: Node<T> | null;
    prev: Node<T> | null;
    val: T;

    constructor(item: T) {
        this.val = item;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    append(item: T): void {
        const node = new Node(item);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Out of bounds");
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        return curr?.val;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Out of bounds");
        } else if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        }

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        const node = new Node(item);
        if (curr && curr.prev) {
            node.prev = curr.prev;
            node.next = curr;

            curr.prev.next = node;
            curr.prev = node;
        }

        this.length++;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        while (curr && curr.val !== item) {
            curr = curr.next;
        }

        if (!curr) return;

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr == this.tail) {
            this.tail = this.tail.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;

            if (curr.next) {
                curr.next.prev = curr.prev;
            }
        }

        this.length--;

        return curr.val;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Out of bounds");
        }

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if (!curr) return;

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr == this.tail) {
            this.tail = this.tail.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;

            if (curr.next) {
                curr.next.prev = curr.prev;
            }
        }

        this.length--;

        return curr.val;
    }
}
