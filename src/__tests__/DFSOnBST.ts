import dfs from "@code/DFSOnBST";
import { tree } from "./tree";

test("DFS on BST", () => {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});
