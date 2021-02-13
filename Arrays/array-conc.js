const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2, ...[7, 8, 9, 10]];

console.log(arr3);