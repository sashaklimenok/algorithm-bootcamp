import { reverse } from './reverse';

describe('Reverse', () => {
  it('should reverse an number array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(reverse<number>(arr)).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it('should revers an object array', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(reverse(arr)).toEqual([{ c: 3 }, { b: 2 }, { a: 1 }]);
  });
});
