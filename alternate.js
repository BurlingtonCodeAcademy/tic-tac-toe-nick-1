// Global Variables
let X_Class = "X";
let O_Class = "O";
let xTurn;
let timerInt;
let timerIncrementor = 1000;
let count = 0;
let cellElements = document.querySelectorAll("[data-cell]");
let start = document.getElementById("start");
let prompt = document.getElementById("prompt");
let cell = document.getElementsByClassName("cell");
let turn = document.getElementById("turn");
let time = document.getElementById("clock");
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



start.addEventListener("click", startGame)

//starts the game
function startGame(){
  turn.textContent = `It's X's turn`
  disableButton();
  xTurn = true;
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
}

//breaks down all possible click results
function handleClick(evt){
  let cell = evt.target;
  let currentClass = xTurn ? X_Class : O_Class;
  //currentTurn needs to be opposite of currentClass to display correct turn.
  let currentTurn = xTurn ? O_Class : X_Class;
  //applies who's turn it is to the turn <h4>
  turn.textContent = `${currentTurn} turn`
  //If cell is occupied the if statement prevents the turn from changing, cell being reassigned, and prompts user no
  if (cell.textContent === "X"||cell.textContent === "O"){
      prompt.textContent = "No, please pick an empty spot"
  } else {
    prompt.textContent = " " //Reassigns the prompt to be empty after correct move is made
  placeMark(cell, currentClass)
  if(checkWin(currentClass)){
    gameOver(false)
  } else if (isDraw()) {
    gameOver(true)
  }
  swapTurns()
}
function gameOver(draw){ //need draw function in the handleClick scope to use template string with currentClass var
  if (draw){
    prompt.textContent = "Its a Draw!!"
  } else {
    prompt.textContent = `Congratulations ${currentClass} you are the Winner!!`;
    stopClick();
    clearInterval(timerInt);
  }
}
}    

//draws X or O
function placeMark(cell, currentClass){
  cell.textContent = currentClass
}


//changes between X and O
function swapTurns(){
  xTurn = !xTurn
}

//iterates through win condition list and compares the text elements of every cell to see if any combination matches.

function checkWin(currentClass){
  return winConditions.some(combination => {
    return combination.every(index => {
        console.log(combination)
      return cellElements[index].textContent === currentClass
    })
  })
}


//destructures the cell elements and iterates through each cell to see if all cells are full. 
function isDraw() {
  return [...cellElements].every(cell =>{
    return cell.textContent === X_Class || cell.textContent === O_Class
  })
}

//disables the start button after being clicked
function disableButton(){
  document.getElementById("start").disabled = true;
}

function stopClick(){
  cellElements.forEach(cell => {
    cell.removeEventListener("click", handleClick)
  })
}

//timer function
start.addEventListener("click", () => {
  timerInt = setInterval(countTimer, timerIncrementor);
});

let countTimer = () => {
  start.disabled = true;
  let newCount = parseInt(time.textContent) + (timerIncrementor/1000);

  time.textContent = newCount;
};