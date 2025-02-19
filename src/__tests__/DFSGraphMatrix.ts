import dfs from "@code/DFSGraphMatrix";
import { matrix2 } from "./graph";

test("dfs - graph matrix", () => {
  // Test finding paths in directed graph
  expect(dfs(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  expect(dfs(matrix2, 6, 0)).toEqual(null); // No path exists from 6 to 0

  // Test path to self
  expect(dfs(matrix2, 1, 1)).toEqual([1]);

  // Test non-existent node
  expect(dfs(matrix2, 0, 7)).toEqual(null);
});
