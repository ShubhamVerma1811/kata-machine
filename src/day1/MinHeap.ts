export default class MinHeap {
    private heap: number[];
    public length: number;

    constructor() {
        this.heap = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.heap.push(value);
        this.length++;
        this.heapifyUp(this.length - 1);
    }

    delete(): number {
        if (this.length < 1) {
            throw new Error("Empty Heap");
        }

        const min = this.heap[0];
        this.heap[0] = this.heap[this.length - 1];
        this.length--;
        this.heapifyDown(0);

        return min;
    }

    private heapifyUp(currIdx: number) {
        if (currIdx <= 0) return;

        const parentIdx = this.parentIdx(currIdx);

        if (this.heap[parentIdx] > this.heap[currIdx]) {
            this.swap(parentIdx, currIdx);
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(currIdx: number) {
        let child = this.leftChildIdx(currIdx);

        let smallest = currIdx;

        if (child < this.length && this.heap[smallest] > this.heap[child]) {
            smallest = child;
        }

        child = this.rightChildIdx(currIdx);

        if (child < this.length && this.heap[smallest] > this.heap[child]) {
            smallest = child;
        }

        if (smallest !== currIdx) {
            this.swap(currIdx, smallest);
            this.heapifyDown(smallest);
        }
    }

    private parentIdx(idx: number) {
        return Math.floor((idx - 1) / 2);
    }

    private leftChildIdx(idx: number) {
        return idx * 2 + 1;
    }

    private rightChildIdx(idx: number) {
        return idx * 2 + 2;
    }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
