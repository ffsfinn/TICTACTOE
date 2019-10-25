//constants--
const player1 = 'X'
const player2 = 'O'

//variables
let image, grid, cell, winner, loser, score, play, quit;

//cache--
const cellAll = document.getElementById('board');
const reset = document.querySelectorAll('reset');

//event--
cellAll.addEventListener('click', cellClick);

function cellClick(evt) {
    console.log('hello');
};