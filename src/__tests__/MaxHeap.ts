import MaxHeap from "@code/MaxHeap";

test("max heap", () => {
  const heap = new MaxHeap();

  expect(heap.length).toEqual(0);

  for (const i of [4, 5, 8, 2, 3, 5, 10, 9, 4]) {
    heap.insert(i);
  }

  // heap.insert(5);

  console.log(heap);

  // heap.insert(69);
  // heap.insert(420);
  // heap.insert(4);
  // heap.insert(1);
  // heap.insert(8);
  // heap.insert(7);

  // expect(heap.length).toEqual(8);
  // expect(heap.delete()).toEqual(420);
  // expect(heap.delete()).toEqual(69);
  // expect(heap.delete()).toEqual(8);
  // expect(heap.delete()).toEqual(7);
  // expect(heap.length).toEqual(4);
  // expect(heap.delete()).toEqual(5);
  // expect(heap.delete()).toEqual(4);
  // expect(heap.delete()).toEqual(3);
  // expect(heap.delete()).toEqual(1);
  // expect(heap.length).toEqual(0);
});
