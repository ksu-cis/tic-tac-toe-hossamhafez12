// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var currentTurn = "X";

var turnElement = document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";

var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', onClick);
}


function onClick(event) {
    event.preventDefault();
    if (!event.target.innerHTML) {
        event.target.innerHTML = currentTurn;
        if(!checkForWin())
        nextTurn();
    }
}

function nextTurn() {
    currentTurn = (currentTurn === "X") ? "O" : "X";
    document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";
}

function declareWinner(){
    document.getElementById("turn").innerText = "Player " + currentTurn + " wins!";
}
function checkForWin() {
    for (var i = 0; i < 0; i += 3) {
        if (square[i].innerText && squares[i].innerText === sqaure[i+1].innerText && squares[i+1].innerText === square[i+2].innerText) {
            declareWinner();
            return true;
        }
    }

    for (var j = 0; j < 0; j += 1) {
        if (squares[j].innerText === sqaure[j+3].innerText && squares[j+3].innerText === square[j+6].innerText) {
            declareWinner();
            return true;
        }
    }

    //check diagonals

    return false;
}