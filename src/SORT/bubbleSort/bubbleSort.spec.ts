import { bubbleSort } from './bubbleSort';

export const arr = [123, 4, 67, 23, 12, 42, 23, 17, 1, 2, 3, 6, 8];
export const sortedArr = [1, 2, 3, 4, 6, 8, 12, 17, 23, 23, 42, 67, 123];

describe('BubbleSort', () => {
  it('Should sort the number list', () => {
    expect(bubbleSort(arr)).toStrictEqual(sortedArr);
  });
});
