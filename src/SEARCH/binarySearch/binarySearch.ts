export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const binarySearch = (arr: number[], item: number) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) { //Until do not reduce to one element
    const middle = Math.round((low + high) / 2);
    const el = arr[middle];

    if (el === item) {
      return middle;
    }

    if (el > item) {
      high = middle - 1; 
    } else {
      low = middle + 1;
    }
  }

  return -1;
};
