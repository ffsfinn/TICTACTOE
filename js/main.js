//constants--
const player1 = 'X'
const player2 = 'O'

//variables
let image, grid, cell, cellALL, winner, loser, score, play, quit;

//cache--
const cellAll = document.getElementById('cell');
const reset = document.querySelectorAll('reset');
const board = document.querySelectorAll('board');

//event--
cellAll.addEventListener('click', cellClick);

function cellClick(evt) {
    
}
