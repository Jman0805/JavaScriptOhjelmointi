'use strict';

function rollDice() {
    let num = (Math.floor(Math.random() * 6) + 1);
    return num;
};

let array = [];
let num = rollDice();
array.push(num);

while (num != 6) {
    num = rollDice();
    array.push(num);
};

let parts = document.getElementById("participants");
parts.innerHTML = "";

array.forEach(part => {
    let item = document.createElement("li");
    item.textContent = part;
    parts.appendChild(item);
});