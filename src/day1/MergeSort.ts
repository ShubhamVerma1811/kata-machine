export default function merge_sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const pivot = Math.floor(arr.length / 2);

    return merge(merge_sort(arr.slice(0, pivot)), merge_sort(arr.slice(pivot)));
}

function merge(left: number[], right: number[]): number[] {
    const res: number[] = [];
    let l = 0,
        r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            res.push(left[l]);
            l++;
        } else {
            res.push(right[r]);
            r++;
        }
    }

    return res.concat(left.slice(l)).concat(right.slice(r));
}
