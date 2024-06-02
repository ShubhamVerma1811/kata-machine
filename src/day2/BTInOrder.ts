export default function in_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    if (!head) return arr;

    function helper(root: BinaryNode<number> | null) {
        if (!root) return;

        helper(root.left);
        arr.push(root.value);
        helper(root.right);
    }

    helper(head);

    return arr;
}
