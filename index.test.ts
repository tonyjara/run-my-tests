it('tests', () => {
  var duplicateZeros = function (arr: number[]): void {
    if (arr.includes(0)) {
      let indexes: number[] = [];

      arr.forEach((x, i) => {
        if (x === 0) {
          indexes.push(i);
        }
      });

      indexes.forEach((x, i) => {
        arr.splice(x + i, 0, 0);
      });

      arr.splice(arr.length - indexes.length, indexes.length);

      return;
    }
    return;
  };

  expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toStrictEqual([
    1, 0, 0, 2, 3, 0, 0, 4,
  ]);
  expect(duplicateZeros([1, 2, 3])).toStrictEqual([1, 2, 3]);
});
