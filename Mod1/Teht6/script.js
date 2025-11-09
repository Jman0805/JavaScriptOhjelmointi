'use strict';
let num = confirm('Should I calculate the square root?');
if (num == true) {
    if (num < 0) {
        document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined';
    } else {
        let num = Number(prompt('Give a number.'));
        let sqr = Math.sqrt(num);
        document.querySelector('#target').innerHTML = 'The square root of ' + num + ' is ' + sqr;   
    } 
} else {
    document.querySelector('#target').innerHTML = 'The square root is not calculated.';
}