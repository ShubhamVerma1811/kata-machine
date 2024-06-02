export default function quick_sort(arr: number[]): number[] {
    if (arr.length === 1) return arr;

    const pivot = arr.length - 1;

    const lA = [];
    const rA = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lA.push(arr[i]);
        } else {
            rA.push(arr[i]);
        }
    }

    return [...quick_sort(lA), pivot, ...quick_sort(rA)];
}
