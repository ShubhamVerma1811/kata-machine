export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    seen: boolean[] = [],
    path: number[] = [],
): number[] | null {
    if (seen[source]) {
        return path;
    }

    seen[source] = true;
    path.push(source);

    if (source === needle) return path;

    for (let i = 0; i < graph[source].length; i++) {
        const adj = graph[source][i];

        if (adj.weight === 0) continue;
        if (seen[adj.to]) continue;

        const res = dfs(graph, adj.to, needle, seen, path);

        if (res) return res;
    }

    path.pop();

    return null;
}
