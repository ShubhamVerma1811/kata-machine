export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q = [source];
    const out: number[] = [];

    while (q?.length) {
        const curr = q.shift() as number;

        if (curr === needle) break;

        const adj = graph[curr];
    }

    return out;
}
