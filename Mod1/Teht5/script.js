'use strict';
const num = Number(prompt('Enter year.'));
let choice = '';
if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0) {
    document.querySelector('#target').innerHTML = num + ' is a leap year';    
} else {
    document.querySelector('#target').innerHTML = num + ' is not a leap year';
}