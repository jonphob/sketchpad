const sketchContainer = document.querySelector(".sketch-area");
const slider = document.getElementById("gridSizeSlider");
const gridSizeDisplay = document.getElementById("size-display");
const colorToggle = document.getElementById("color-select");
let color = "black";

//To clear grid on grid size change and reset
function clearGrid(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//Changes colors of sketch depending on colour toggle selection, done backwards as node list updated in real time
function addColor(color) {
  const grid = document.querySelectorAll(".sketch-area > div");
  for (let i = grid.length - 1; i >= 0; --i) {
    if (color === "black") {
      grid[i].addEventListener("mouseenter", black);
      grid[i].removeEventListener("mouseenter", random);
    }
    if (color === "random") {
      grid[i].addEventListener("mouseenter", random);
      grid[i].removeEventListener("mouseenter", black);
    }
  }
}

//Event Listener for Color Selection Toggle
colorToggle.addEventListener("change", () => {
  color === "black" ? (color = "random") : (color = "black");
  addColor(color);
});

function black() {
  this.style.backgroundColor = "black";
}

function random() {
  this.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
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
    if (color === "black") {
      square.addEventListener("mouseenter", black);
    } else {
      square.addEventListener("mouseenter", random);
    }
  }
};

slider.addEventListener("input", (e) => {
  clearGrid(sketchContainer);
  createGrid(e.target.value);
  gridSizeDisplay.innerText = `${e.target.value} x ${e.target.value}`;
});

gridSizeDisplay.innerText = `${slider.value} x ${slider.value}`;
createGrid(32);
