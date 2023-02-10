const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];

const reverse = (arr) => {
  const length = arr.length;
  const half = length / 2
  for(let i = 0; i < half; i++) {
    const cachedElement = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - i - 1] = cachedElement;
  }
}

reverse(array);

console.log(array);
