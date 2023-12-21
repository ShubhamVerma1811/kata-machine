class Node<T> {
    next: Node<T> | null;
    val: T;

    constructor(item: T) {
        this.val = item;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
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

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(item: T): void {
        const node = new Node(item);

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
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

        this.length++;

        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        const node = new Node(item);
        if (curr) {
            const tmp = curr.next;
            curr.next = node;
            node.next = tmp;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = null;

        while (curr && curr.val !== item) {
            prev = curr;
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail) {
            this.tail = prev;
        }

        if (prev) {
            prev.next = curr.next;
        }

        this.length--;
        return curr.val;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Out of bounds");
        }
        let curr = this.head;
        let prev = null;

        for (let i = 0; curr && i < idx; i++) {
            prev = curr;
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail) {
            this.tail = prev;
        }

        if (prev) {
            prev.next = curr.next;
        }

        this.length--;
        return curr.val;
    }
}
