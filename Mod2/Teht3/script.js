'use strict';

let array = [];

for (let i = 0; i < 6; i++) {
    let name = prompt('Input dog name');
    array.push(name);
}

array.sort();
array.reverse();

let parts = document.getElementById("participants");
parts.innerHTML = "";

array.forEach(part => {
    let item = document.createElement("li");
    item.textContent = part;
    parts.appendChild(item);
});