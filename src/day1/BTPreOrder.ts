export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];

    function helper(root: BinaryNode<number> | null) {
        if (!root) return;

        arr.push(root.value);
        helper(root.left);
        helper(root.right);
    }

    helper(head);

    return arr;
}
