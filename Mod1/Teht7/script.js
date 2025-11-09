'use strict';
let num = Number(prompt('Number of die'));
let sum = 0;
for (let i = 0; i < num; i++) {
    sum = sum + (Math.floor(Math.random() * 6) + 1);
}

document.querySelector('#target').innerHTML = 'The sum of the die is ' + sum;