export default class ArrayList<T> {
    private items: T[];
    public length: number;

    constructor() {
        this.items = [];
        this.length = 0;
    }

    prepend(item: T): void {
        this.items.unshift(item);
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        this.items.splice(idx, 0, item);
        this.length++;
    }

    append(item: T): void {
        this.items.push(item);
        this.length++;
    }

    remove(item: T): T | undefined {
        const idx = this.items.indexOf(item);
        if (idx === -1) {
            return undefined;
        }
        this.items.splice(idx, 1);
        this.length--;
        return item;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.items[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const item = this.items[idx];
        this.items.splice(idx, 1);
        this.length--;
        return item;
    }
}
