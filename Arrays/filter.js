const numbers = [5, 50, 37, 3, 15, 12, 7, 32];

const newNumbers = numbers.filter((value) => {
  return value > 10;
});

// console.log(newNumbers);


const persons = [
  {name: 'Sonia', age: 17},
  {name: 'Jeziel', age: 20},
  {name: 'Fábio W', age: 19},
  {name: 'Kevin A.', age: 45},
  {name: 'Italo P.', age: 32},
  {name: 'Erlon Jr', age: 25},
];

const filteredPersonName = persons.filter((value) => {
  return value.name.length >= 7;
});

console.log(filteredPersonName);


const filteredPersonAge = persons.filter((value) => {
  return value.age > 30;
});

console.log(filteredPersonAge);

const filteredNameEndsWithA = persons.filter((value) => {
  return value.name.toLocaleLowerCase().endsWith('a');
});

console.log(filteredNameEndsWithA);