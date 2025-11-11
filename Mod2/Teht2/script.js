'use strict';

let num = Number(prompt('Number of participants'));

let array = [];

for (let i = 0; i < num; i++) {
    let name = prompt('Input name');
    array.push(name);
}

array.sort();

let parts = document.getElementById("participants");
parts.innerHTML = "";

array.forEach(part => {
    let item = document.createElement("li");
    item.textContent = part;
    parts.appendChild(item);
});