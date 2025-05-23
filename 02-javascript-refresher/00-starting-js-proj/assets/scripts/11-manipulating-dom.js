console.log("== manipulating dom ==");

const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New item added to the list";
list.appendChild(newItem);
