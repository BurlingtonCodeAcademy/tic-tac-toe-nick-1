
let X_Class = "x";
let O_Class = "o";
let cellElements = document.querySelectorAll("[data-cell]");
let start = document.getElementById("start");
let prompt = document.getElementById("prompt");
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



let xTurn;


start.addEventListener("click", disableButton, startGame())

// startGame();

function startGame() {
  xTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, {
      once: true,
    });
  });
}

function handleClick(evt){
  let cell = evt.target;
  let currentClass = xTurn ? X_Class : O_Class
  placeMark(cell, currentClass)
  //check for win
  if(checkWin(currentClass)){
    prompt.textContent = "Winner! Winner!"
  }
  //check for draw
  //switch turns
  swapTurns()
}

function placeMark(cell, currentClass){
  cell.textContent = currentClass
}

function swapTurns(){
  xTurn = !xTurn
}


function checkWin(currentClass){
  return winConditions.some(combination => {
    return combination.every(index => {
      return cellElements[index].textContent === currentClass
    })
  })
}

function disableButton(){
  document.getElementById("start").disabled = true;
}



// startGame();

// let stopTimer = document.getElementById("stopTimer");

start.addEventListener("click",(evt) => {
    let time = document.getElementById("clock");
    time.textContent = parseInt(time.textContent);

    let intervalFunction = setInterval(function () {                    
      let counter = parseInt(time.textContent) + 1;
      time.textContent = counter;
    },1000);
  
 


// stopTimer.addEventListener("click", (evt) => {
//   clearInterval(intervalFunction);
//   });
});

// function firstMove(evt) {
//   let cell = evt.target;
//   let currentClass = xTurn ? X_Class : O_Class;
//   letMove(cell, currentClass);
//   switchTurns();
// }

// function letMove(cell, currentClass) {
//   cell.classlist.add(currentClass);
// }

// function switchTurns() {
//   xTurn = !xTurn;
// }
