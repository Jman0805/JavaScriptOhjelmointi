let parts = document.getElementById("target");

let array = ["First item","Second item","Third item"];

array.forEach(part => {
    let item = document.createElement("li");
    item.textContent = part;
    parts.appendChild(item);
});