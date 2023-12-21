export default function dfs(
    head: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (!head) return false;

    if (head.value === needle) return true;

    head.value < needle && dfs(head?.right, needle);
    head.value > needle && dfs(head?.left, needle);

    return false;
}
