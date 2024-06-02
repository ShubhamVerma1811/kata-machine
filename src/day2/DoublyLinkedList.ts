class Node<T> {
    val: T;
    next?: Node<T>;
    prev?: Node<T>;

    constructor(item: T) {
        this.val = item;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
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
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw new Error("Out of bounds");
        else if (idx === 0) this.prepend(item);
        else if (idx === this.length) this.append(item);

        const node = new Node(item);

        let curr = this.head;

        for (let i = 0; i < idx; i++) {
            curr = curr?.next;
        }

        node.prev = curr?.prev;
        node.next = curr;

        if (curr?.prev) {
            curr.prev.next = node;
            curr.prev = node;
            this.length++;
        }
    }

    get(idx: number): T | undefined {
        let count = 0;

        let curr = this.head;

        while (count < idx) {
            curr = curr?.next;
            ++count;
        }

        return curr?.val;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        while (curr && curr.val !== item) {
            curr = curr.next;
        }

        if (!curr) return;

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail) {
            this.tail = this.tail.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;

            if (curr.next) curr.next.prev = curr.prev;
        }

        this.length--;

        return curr?.val;
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head;
        let count = 0;

        while (count < idx) {
            curr = curr?.next;
            count++;
        }

        if (!curr) return;

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail) {
            this.tail = this.tail.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;

            if (curr.next) curr.next.prev = curr.prev;
        }

        this.length--;

        return curr?.val;
    }
}
