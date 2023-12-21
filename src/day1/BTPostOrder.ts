export default function post_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];

    function helper(root: BinaryNode<number> | null) {
        if (!root) return;

        helper(root.left);
        helper(root.right);
        arr.push(root.value);
    }

    helper(head);

    return arr;
}
