const numbers = [5, 50, 37, 3, 15, 12, 7, 32];

const multipliedNumbers = numbers.map((value) => {
  return value * 2;
});

// console.log(multipliedNumbers);

const persons = [
  {name: 'Sonia', age: 17},
  {name: 'Jeziel', age: 20},
  {name: 'Fábio W', age: 19},
  {name: 'Kevin A.', age: 45},
  {name: 'Italo P.', age: 32},
  {name: 'Erlon Jr', age: 25},
];

// Mostrar apenas os nomes.
const personNames = persons.map((value) => {
  return value.name;
});

console.log(personNames);

// Remover nome do objeto.
const removedNameKey = persons.map((value) => {
  delete value.name;
  return value;

  // or return { age: value.age };
});

console.log(removedNameKey);

// Adicionar chave Id.
const addId = persons.map((value, index) => {
  return {id: (index +1) * 1, ...value};
});

console.log(addId);