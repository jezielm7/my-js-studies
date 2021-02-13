const names = ['Jeziel', 'Fábio', 'Italo', 'Kevin'];

names.splice(-2, 1, 'Marlon'); //splice(índice, delete, elem1, elem2);
console.log(names);

// Se quiser visualizar os itens removidos;
// const removed = names.splice(2, 1);
// console.log(names, removed);

// output: ['Jeziel', 'Fábio', 'Kevin'] ['Italo']; 

// pop();
// names.splice(-1, 1);
// console.log(names);

// shift();
// names.splice(0, 1);
// console.log(names);

// push();
// names.splice(names.length, 0, 'Jean');
// console.log(names);

// unshift();
// names.splice(0, 0, 'Jean');
// console.log(names);