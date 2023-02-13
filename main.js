const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const output = document.querySelector("#value");
const colorDialog = document.querySelector("#colorDialogID");

output.textContent = `Value: ${slider.value}`;
enableDrawing(true);

slider.addEventListener("input", () => {
  enableDrawing(true);
});
colorDialog.addEventListener("change", () => {
  enableDrawing(false);
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

function enableDrawing(clear) {
  let color = colorDialog.value;
  output.textContent = `Value: ${slider.value}`;
  squareNumberPerSide = slider.value;

  if (clear) drawGrid(squareNumberPerSide);
  else {
    let ifClear = confirm("Clear the Grid?");
    if (ifClear) drawGrid(squareNumberPerSide);
    else {
    }
  }

  const squares = container.querySelectorAll("div.square");
  let squaresArray = Array.from(squares);

  let firstSquare;
  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    firstSquare = e.target;
    for (let i = 0; i < squaresArray.length; i++) {
      if (e.target === squaresArray[i])
        firstSquare.style.backgroundColor = `${color}`;
    }
    isDrawing = true;
    container.addEventListener("mouseover", drawFunction);
  });

  container.addEventListener("mouseup", () => {
    isDrawing = false;
    container.removeEventListener("mouseover", drawFunction);
  });

  function drawFunction(e) {
    if (isDrawing) {
      for (let i = 0; i < squaresArray.length; i++) {
        if (e.target === squaresArray[i]) {
          squaresArray[i].style.backgroundColor = `${color}`;
        }
      }
    }
  }
}
