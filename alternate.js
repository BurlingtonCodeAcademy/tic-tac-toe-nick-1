
let X_Class = "X";
let O_Class = "O";
let cellElements = document.querySelectorAll("[data-cell]");
let start = document.getElementById("start");
let prompt = document.getElementById("prompt");
let cell = document.getElementsByClassName("cell")
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


start.addEventListener("click", startGame)


function startGame(){
  disableButton();
  xTurn = true;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, {
      once: true,
    });
  });
}


function handleClick(evt){
  let cell = evt.target;
  let currentClass = xTurn ? X_Class : O_Class
  if(cell === false) { 
    console.log("no")
  } else {
  placeMark(cell, currentClass)
  //check for win
  if(checkWin(currentClass)){
    gameOver(false)
  } else if (isDraw()) {
    gameOver(true)
  }
  //check for draw
  //switch turns
  cell = false
  swapTurns()
}
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

function gameOver(draw){
  if (draw){
    prompt.textContent = "Its a Draw!!"
  } else {
    prompt.textContent = "Winner!! Winner!!";
  }
}

function isDraw() {
  return [...cellElements].every(cell =>{
    return cell.textContent === X_Class || cell.textContent === O_Class
  })
}

//function to disable the start button once clicked
function disableButton(){
  document.getElementById("start").disabled = true;
}


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
