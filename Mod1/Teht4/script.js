'use strict';
const nameN = prompt('Type your name.');
const num = Math.floor(Math.random() * 4 + 1);
let choice = '';
switch(num) {
    case 1:
        choice = 'Gryffindor';
        break;
    case 2:
        choice = 'Slytherin';
        break;
    case 3:
        choice = 'Hufflepuff';
        break;
    default:
        choice = 'Ravenclaw';
}
document.querySelector('#target').innerHTML = nameN + ', you are ' + choice + '.';