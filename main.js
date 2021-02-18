// let c0 = document.getElementById("cell-0");
// let c1 = document.getElementById("cell-1");
// let c2 = document.getElementById("cell-2");
// let c3 = document.getElementById("cell-3");
// let c4 = document.getElementById("cell-4");
// let c5 = document.getElementById("cell-5");
// let c6 = document.getElementById("cell-6");
// let c7 = document.getElementById("cell-7");
// let c8 = document.getElementById("cell-8");

// let cells = document.getElementsByClassName('cell')

// let allCells = cells.children;


let start = document.getElementById('start')

start.addEventListener("click", playX)
let player1= true
let game = true

function playX(){

document.querySelectorAll(".cell").forEach (item => {
    item.addEventListener("click", evt => {
       item.textContent = "X"; 
        playO()
    })
});
}

function playO(){
    document.querySelectorAll(".cell").forEach (item => {
        item.addEventListener("click", evt => {
            item.textContent = "O";
            playX();
        })
    })

}
// } if (player1 === false){
//     document.querySelectorAll(".cell").forEach(item => {
//         item.addEventListener("click", evt => {
//             item.textContent = "O"
//             player1 = true
//         })
//     })
// } 

    



