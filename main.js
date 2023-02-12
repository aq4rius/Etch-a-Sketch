const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const output = document.querySelector("#value");

output.textContent = `Value: ${slider.value}`;

slider.addEventListener("input", () => {
  output.textContent = `Value: ${slider.value}`;
  squareNumberPerSide = parseInt(slider.value);
  drawGrid(squareNumberPerSide);
});

function drawGrid(squareNumberPerSide) {
  container.innerHTML = "";
  let containerArea = 320 * 320;
  let squareSize = Math.sqrt(containerArea / Math.pow(squareNumberPerSide, 2));
  container.style.gridTemplateColumns = `repeat(${squareNumberPerSide},1fr)`;
  for (let i = 0; i < squareNumberPerSide * squareNumberPerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    square.style.border = "1px solid";
    container.appendChild(square);
  }
}

const squares = document.querySelectorAll("div.square");
let squaresArray = Array.from(squares);

document.addEventListener("mousedown", () => {
  isDrawing = true;
  document.addEventListener("mouseover", drawFunction);
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
  document.removeEventListener("mouseover", drawFunction);
});

function drawFunction(e) {
  if (isDrawing) {
    for (let i = 0; i < squaresArray.length; i++) {
      if (e.target === squaresArray[i]) {
        squaresArray[i].style.backgroundColor = "black";
      }
    }
  }
}
