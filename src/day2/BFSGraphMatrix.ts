export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const q = [source];
    const seen = [];
    const path = [];

    seen[source] = true;
    path[source] = -1;

    while (q.length) {
        const curr = q.shift()!;

        if (curr === needle) {
            break;
        }

        for (let i = 0; i < graph[curr].length; i++) {
            const adj = graph[curr][i];

            if (adj !== 0 && !seen[i]) {
                seen[i] = true;
                path[i] = curr;
                q.push(i);
            }
        }
    }

    const out: number[] = [];

    let prev = needle;

    while (prev > 0) {
        out.push(prev);
        prev = path[prev];
    }

    return !out.length ? null : [source].concat(out.reverse());
}
