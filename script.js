let cards = document.querySelectorAll(".card");
let lists = document.querySelectorAll(".list");

for (let card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (let list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragEnd(e) {
  e.target.style.opacity = "1";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  //e.target.style.backgroundColor = "#f0f0f0";
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  let id = e.dataTransfer.getData("text/plain");
  let card = document.getElementById(id);

  this.appendChild(card);
  this.classList.removr("over");
}
