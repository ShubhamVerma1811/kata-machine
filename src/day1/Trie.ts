class Node {
    children: Map<string, Node>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

export default class Trie {
    private root: Node;

    constructor() {
        this.root = new Node();
    }

    insert(item: string): void {
        let curr = this.root;
        for (const i of item) {
            if (!curr.children.has(i)) {
                curr.children.set(i, new Node());
            } else {
                curr = curr.children.get(i)!;
            }
        }
        curr.isEnd = true;
    }

    delete(item: string): void {}

    find(partial: string): string[] {
        const arr: string[] = [];
        let curr = this.root;
        for (const i of partial) {
            if (curr.children.has(i)) {
            }
        }

        return arr;
    }
}
