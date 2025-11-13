'use strict';

function rollDice(sides) {
    let num = (Math.floor(Math.random() * sides) + 1);
    return num;
};

let array = [];
let num = 0;

let sides = Number(prompt("Number of dice sides"))

do {
    num = rollDice(sides);
    array.push(num);
} while (num != sides);

let parts = document.getElementById("participants");
parts.innerHTML = "";

array.forEach(part => {
    let item = document.createElement("li");
    item.textContent = part;
    parts.appendChild(item);
});