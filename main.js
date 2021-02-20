

// let allCells = cells.children;

let start = document.getElementById("start");
let prompt = document.getElementById("prompt");
let cells = document.getElementsByClassName("cell");

function draw() {
  cell.textContent = "X";
}

start.addEventListener("click", play);

function play() {
  cells.forEach((cell) => {
    cell.addEventListener("click", draw, {
      once: true,
    });
  });
}

// function playO() {
//   document.querySelectorAll(".cell").forEach((item) => {
//     item.addEventListener("click", (evt) => {
//       item.textContent = "O";
//       {once:true}
//       playX();
//     });
//   });
// }
