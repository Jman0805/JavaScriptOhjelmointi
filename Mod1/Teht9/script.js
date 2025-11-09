'use strict';
let num = Number(prompt('Input number'));

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
}

if (isPrime) {
    document.querySelector('#target').innerHTML = num + ' is a prime number';
} else {
    document.querySelector('#target').innerHTML = num + ' is not a prime number';
}