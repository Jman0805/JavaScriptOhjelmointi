'use strict';

let array = [];
let num = Number(prompt('Input number'));

while (array.includes(num) == false) {
    array.push(num);
    num = Number(prompt('Input number'));
};

console.log("The given number already exists")
array.sort((a,b) => a-b);

array.forEach(part => {
    console.log(part);
});