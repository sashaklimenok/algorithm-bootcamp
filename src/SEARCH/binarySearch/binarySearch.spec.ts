import { arr, binarySearch } from './binarySearch';

describe('BinarySearch', () => {
  it('Should find the 3-th element', () => {
    expect(binarySearch(arr, 5)).toBe(4);
  });

  it('Should return -1 if the element not found', () => {
    expect(binarySearch(arr, 123)).toBe(-1);
  });
});
