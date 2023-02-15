export const reverse = <T>(arr: T[]): T[] => {
  const middle = arr.length / 2;
  const length = arr.length - 1;
  for (let i = 0; i < middle; i++) {
    const temp = arr[i];
    arr[i] = arr[length - i];
    arr[length - i] = temp;
  }

  return arr;
};
