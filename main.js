// let c0 = document.getElementById("cell-0");
// let c1 = document.getElementById("cell-1");
// let c2 = document.getElementById("cell-2");
// let c3 = document.getElementById("cell-3");
// let c4 = document.getElementById("cell-4");
// let c5 = document.getElementById("cell-5");
// let c6 = document.getElementById("cell-6");
// let c7 = document.getElementById("cell-7");
// let c8 = document.getElementById("cell-8");

let cells = document.getElementsByClassName('cell')

for(cell of cells)



cells.addEventListener("click", draw);

function draw(){
    cell.textContent = "X"
    
}