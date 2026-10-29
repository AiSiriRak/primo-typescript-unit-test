export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  let result: number[] = [];

  let i1 = 0;
  let i2 = 0;
  let i3 = collection_3.length - 1;

  while (i1 < collection_1.length || i2 < collection_2.length || i3 >= 0) {
    const c1 =
      i1 < collection_1.length ? (collection_1[i1] ?? Infinity) : Infinity;
    const c2 =
      i2 < collection_2.length ? (collection_2[i2] ?? Infinity) : Infinity;
    const c3 = i3 >= 0 ? (collection_3[i3] ?? Infinity) : Infinity;

    if (c1 <= c2 && c1 <= c3) {
      result.push(c1);
      i1++;
    } else if (c2 <= c3) {
      result.push(c2);
      i2++;
    } else {
      result.push(c3);
      i3--;
    }
  }

  return result;
}
