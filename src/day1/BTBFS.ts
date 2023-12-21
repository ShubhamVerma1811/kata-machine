export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const stack = [head];

    while (stack?.length) {
        const node = stack.shift();

        if (node?.value === needle) return true;
        if (node?.left) stack.push(node.left);
        if (node?.right) stack.push(node.right);
    }

    return false;
}
