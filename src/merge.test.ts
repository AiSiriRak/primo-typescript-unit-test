import { describe, test, expect } from "vitest";

import { merge } from "../src/merge.js";

describe("merge", () => {
  test("merges and sort three collections", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test("handles all empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("handles one empty collection", () => {
    expect(merge([1, 3], [2, 4], [])).toEqual([1, 2, 3, 4]);

    expect(merge([], [2, 4], [5, 3, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles duplicate values", () => {
    expect(merge([1, 2, 2], [2, 3], [4, 2, 1])).toEqual([
      1, 1, 2, 2, 2, 2, 3, 4,
    ]);
  });

  test("handles negative numbers and zero", () => {
    expect(merge([-5, -1, 3], [0, 2], [4, -2, -6])).toEqual([
      -6, -5, -2, -1, 0, 2, 3, 4,
    ]);
  });
});
