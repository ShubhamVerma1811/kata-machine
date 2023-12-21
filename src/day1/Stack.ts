export default class Stack<T> {
    public length: number;
    private arr: Array<T>;

    constructor() {
        this.length = 0;
        this.arr = [];
    }

    push(item: T): void {
        this.arr.push(item);
        this.length++;
    }

    pop(): T | undefined {
        this.length--;
        return this.arr.pop();
    }

    peek(): T | undefined {
        console.log(this.arr, this.length);

        return this.arr[this.arr.length - 1];
    }
}
