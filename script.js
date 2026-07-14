let draggedCard = null;

function drag(event) {
  draggedCard = event.target;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", "card");
}

function dragoverHandler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function dropHandler(event) {
  event.preventDefault();

  const targetList = event.currentTarget;
  const targetCard = event.target.closest(".card");

  if (!draggedCard || !draggedCard.classList.contains("card")) return;

  if (targetCard && targetCard !== draggedCard) {
    targetList.insertBefore(draggedCard, targetCard);
  } else {
    targetList.appendChild(draggedCard);
  }

  draggedCard = null;
}
