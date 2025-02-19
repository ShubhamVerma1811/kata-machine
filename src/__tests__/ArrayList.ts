import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

test("array-list", () => {
  const list = new ArrayList<number>();
  test_list(list);
});
