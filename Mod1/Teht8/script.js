'use strict';
let startY = Number(prompt('Start year'));
let endY = Number(prompt('End year'));
let leapY = [];
for (let i = startY; i < endY; i++) {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
        leapY.push(i);   
    }
}

let leapList = document.getElementById("leapYearsList");
leapList.innerHTML = "";

leapY.forEach(year => {
    let item = document.createElement("li");
    item.textContent = year;
    leapList.appendChild(item);
});