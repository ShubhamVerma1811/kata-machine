export default class Queue<T> {
    private items: T[];
    public length: number;

    constructor() {
        this.items = [];
        this.length = 0;
    }

    enqueue(item: T): void {
        this.items.push(item);
        this.length++;
    }

    dequeue(): T | undefined {
        if (this.length > 0) {
            this.length--;
            return this.items.shift();
        }
        return undefined;
    }

    peek(): T | undefined {
        return this.items[0];
    }
}
