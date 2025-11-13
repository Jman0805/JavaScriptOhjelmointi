'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let parts = document.getElementById("target");

students.forEach(part => {
    const option = document.createElement('option');
    option.value = part.id;
    option.textContent = part.name;
    parts.appendChild(option);
});