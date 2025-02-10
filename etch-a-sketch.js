let containerGrid = document.getElementById("containerGrid");
let containerDimension = 500;

function removeAllSquares() {
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }
}

function createGrid(cellsPerRow) {
  removeAllSquares();
  for (let i = 0; i < cellsPerRow * cellsPerRow; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.style.height = containerDimension / cellsPerRow + "px";
    gridSquare.style.width = containerDimension / cellsPerRow + "px";
    gridSquare.addEventListener("mouseenter", function () {
      gridSquare.style.backgroundColor = "red";
      gridSquare.style.opacity -= "-0.1";
    });

    containerGrid.appendChild(gridSquare);
  }
}

createGrid(16);

let btnSquaresPerSide = document.createElement("button");
btnSquaresPerSide.className = "button";
btnSquaresPerSide.textContent = "Choose dimensions";
btnSquaresPerSide.addEventListener("click", function () {
  let input = prompt("How many squares do you want on one side?", "Enter here");
  createGrid(input);
});
document.body.appendChild(btnSquaresPerSide);

let btnClearDrawing = document.createElement("button");
document.body.appendChild(btnClearDrawing);
btnClearDrawing.className = "button";
btnClearDrawing.textContent = "Clear your drawing";
btnClearDrawing.addEventListener("click", function () {
  for (const containerChild of containerGrid.children) {
    containerChild.style.backgroundColor = "white";
  }
});
