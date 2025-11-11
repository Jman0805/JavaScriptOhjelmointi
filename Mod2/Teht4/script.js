'use strict';

let array = [];

let num = Number(prompt('Input number (0 to stop)'));

while (num != 0) {
    array.push(num);
    num = Number(prompt('Input number (0 to stop)'));
}

array.sort((a,b) => b-a);

array.forEach(part => {
    console.log(part);
});