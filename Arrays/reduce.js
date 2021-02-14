const numbers = [5, 50, 37, 2, 15, 12, 7, 32];

// Soma total dos valores do array.
const total = numbers.reduce((accumulator, value) => {
  accumulator += value;
  return accumulator;
}, 0);

// console.log(total);


// Soma total dos pares do array.
const totalPairs = numbers.reduce((accumulator, value) => {
  if(value % 2 === 0) accumulator += value;
  return accumulator;
}, 0);

// console.log(totalPairs);


const persons = [
  { name: 'Sonia', age: 17 },
  { name: 'Jeziel', age: 20 },
  { name: 'Fábio W', age: 19 },
  { name: 'Kevin A.', age: 45 },
  { name: 'Italo P.', age: 32 },
  { name: 'Erlon Jr', age: 25 },
];

const olderPerson = persons.reduce((accumulator, value) => {
  if(accumulator.age > value.age) return accumulator;
  return value;
});

console.log(olderPerson);
