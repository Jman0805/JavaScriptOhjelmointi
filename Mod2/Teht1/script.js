'use strict';

let array = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt('Input number'));
    array.push(num);
}

for (let i = 5; i > 0; i--) {
    console.log(array[i-1]);
}