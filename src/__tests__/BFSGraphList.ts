import bfs from "@code/BFSGraphList";
import { list1, list2 } from "./graph";

test("bfs - graph list", () => {
  // Test graph with cycles (list1)
  expect(bfs(list1, 0, 6)).toEqual([0, 2, 3, 6]);
  expect(bfs(list1, 6, 0)).toEqual([6, 3, 2, 0]);

  // Test graph with one-way paths (list2)
  expect(bfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  expect(bfs(list2, 6, 0)).toEqual(null); // No path exists from 6 to 0

  // Test path to self
  expect(bfs(list2, 1, 1)).toEqual([1]);

  // Test non-existent node
  expect(bfs(list2, 0, 7)).toEqual(null);
});
