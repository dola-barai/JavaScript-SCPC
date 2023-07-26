const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const num = {};

inputArray.map((i) => {
  num[i] = num[i] + 1 || 1;
});

let key = Object.keys(num);
let value = Object.values(num);
let max = Math.max(...value);
let most = value.findIndex((i) => {
  return i == max;
});

console.log(key[most]);
  