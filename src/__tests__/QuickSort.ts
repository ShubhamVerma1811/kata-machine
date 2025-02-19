import quick_sort from "@code/QuickSort";

test("quick-sort", () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  const x = quick_sort(arr);

  expect(x).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
