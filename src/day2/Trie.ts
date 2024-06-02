class Node {
    isEnd: boolean;
    children?: Map<string, Node>;

    constructor() {
        this.isEnd = false;
        this.children = new Map();
    }
}

export default class Trie {
    private root?: Node;
    constructor() {
        this.root = new Node();
    }

    insert(item: string): void {
        let curr = this.root;

        for (const i of item) {
            if (curr && curr.children?.has(i)) {
                curr = curr.children.get(i);
            } else {
                curr!.children?.set(i, new Node());
            }
        }
        curr!.isEnd = true;
    }

    delete(item: string): void {}

    find(partial: string): string[] {
        const arr: string[] = [];
        let node: Node;
        let curr = this.root;
        for (const i of partial) {
            if (curr && curr.children?.has(i)) {
                curr = curr.children.get(i);
            }
        }

        arr.push(partial)

        return arr;
    }
}
