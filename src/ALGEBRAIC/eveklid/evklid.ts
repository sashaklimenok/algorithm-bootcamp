export const findNOD = (a: number, b: number) => {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a > b ? a : b;
};
