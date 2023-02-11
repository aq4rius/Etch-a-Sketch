const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

const squareDiv = document.querySelectorAll("div.square");
let squareArray = Array.from(squareDiv);

window.addEventListener("mouseover", (e) => {
  for (let i = 0; i < squareArray.length; i++) {
    if (e.target === squareArray[i]) {
      squareArray[i].style.backgroundColor = "blue";
    }
  }
});
