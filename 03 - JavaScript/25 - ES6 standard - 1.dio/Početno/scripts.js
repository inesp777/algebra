"use strict";
// 1.
let a = 78;
var b = 034;
// delete varijable ili objekta nije dozvoljeno 
//delete a;
//delete window.b;
myObject = { property1: 1, property2: 2, property1: 1 };

// 2.

const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];
const user = { name: 'Lorenzo', surname: 'Verdi' };
const nusers = [...users, user];
console.log(nusers);

// 3. sa let i piše da i is not defined, a sa var 10, The number is 10
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}

console.log(i);
