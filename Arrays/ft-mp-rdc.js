const numbers = [5, 50, 37, 2, 15, 12, 7, 32];

const pairNumbers = numbers.filter((value) => {
  return value % 2 === 0;
}).map(value => value * 2).reduce((acc, value) => {
  acc += value;
  return acc;
});

console.log(pairNumbers)