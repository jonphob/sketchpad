const sketchContainer = document.querySelector(".sketch-area");
const slider = document.getElementById("gridSizeSlider");
const gridSizeDisplay = document.getElementById("size-display");

function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addColor() {
  this.style.backgroundColor = "black";
}

const createGrid = (gridSize) => {
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    square.style.width = `${1000 / gridSize}px`;
    square.style.height = `${1000 / gridSize}px`;
    sketchContainer.appendChild(square);
    square.addEventListener("mouseenter", addColor);
  }
};

gridSizeDisplay.innerText = `${slider.value} x ${slider.value}`;

slider.addEventListener("input", (e) => {
  clearGrid(sketchContainer);
  createGrid(e.target.value);

  gridSizeDisplay.innerText = `${e.target.value} x ${e.target.value}`;
});

createGrid(50);
