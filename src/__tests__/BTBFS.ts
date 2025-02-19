import bfs from "@code/BTBFS";
import { tree } from "./tree";

test("bt bfs", () => {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});
