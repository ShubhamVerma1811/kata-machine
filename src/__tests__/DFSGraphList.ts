import dfs from "@code/DFSGraphList";
import { list1, list2 } from "./graph";

test("dfs - graph list", () => {
  // Test graph with cycles (list1)
  expect(dfs(list1, 0, 6)).toEqual([0, 2, 3, 6]);
  expect(dfs(list1, 6, 0)).toEqual([6, 3, 2, 0]);

  // Test graph with one-way paths (list2)
  expect(dfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  expect(dfs(list2, 6, 0)).toEqual(null); // No path exists from 6 to 0

  // Test path to self
  expect(dfs(list2, 1, 1)).toEqual([1]);

  // Test non-existent node
  expect(dfs(list2, 0, 7)).toEqual(null);
});
