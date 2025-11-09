'use strict';
let num = Number(prompt('Number of die'));
let target = Number(prompt('Sum number'));

function rollDice(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = sum + (Math.floor(Math.random() * 6) + 1);
    }
    return sum;
}

const loops = 10000;
let success = 0;

for (let i = 0; i < loops; i++) {
    let sum = rollDice(num);
    if (sum === target) {
        success++;
    }
}

let prob = success / loops;

document.querySelector('#target').innerHTML = 'The probability of getting ' + target + ' is ' + (prob * 100).toFixed(2) + '%';