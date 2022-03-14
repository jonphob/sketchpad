const sketchContainer = document.querySelector(".sketch-area");

const createGrid = (gridSize) => {
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    square.style.width = `${960 / gridSize}px`;
    square.style.height = `${960 / gridSize}px`;
    sketchContainer.appendChild(square);
  }
};

createGrid(16);
