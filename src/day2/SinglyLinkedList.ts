class Node<T> {
    val: T;
    next?: Node<T>;

    constructor(item: T) {
        this.val = item;
        this.next = undefined;
    }
}

export default class SinglyLinkedList<T> {
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
            this.tail = node;
        }

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) throw new Error("Out of bounds");
        else if (idx === 0) this.prepend(item);
        else if (idx === this.length) this.append(item);
        else {
            const node = new Node(item);
            let curr = this.head;
            let count = 0;
            while (count < idx) {
                curr = curr?.next;
                count++;
            }

            if (curr) {
                node.next = curr.next?.next;
                curr.next = node;
                this.length++;
            }
        }
    }

    get(idx: number): T | undefined {
        let curr = this.head;

        for (let i = 0; i < idx; i++) {
            curr = curr?.next;
        }

        return curr?.val;
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        let prev = null;
        while (curr && curr.val !== item) {
            prev = curr;
            curr = curr?.next;
        }

        if (!curr) return;
        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail && prev) {
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

        let count = 0;

        while (count < idx) {
            prev = curr;
            curr = curr?.next;
            count++;
        }

        if (!curr) return;
        if (curr === this.head) {
            this.head = this.head.next;
        } else if (curr === this.tail) {
            this.tail = prev || undefined;
        }

        if (prev) {
            prev.next = curr.next;
        }
        this.length--;

        return curr.val;
    }
}
