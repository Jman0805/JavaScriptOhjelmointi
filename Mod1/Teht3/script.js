'use strict';
let num1 = Number(prompt('Number 1:'));
let num2 = Number(prompt('Number 2:'));
let num3 = Number(prompt('Number 3:'));
let sum = num1 + num2 + num3;
let prod = num1 * num2 * num3;
let avg = (num1 + num2 + num3) / 3;
document.querySelector('#target').innerHTML = 'Sum: ' + sum + ' Product: ' + prod + ' Average: ' + avg;