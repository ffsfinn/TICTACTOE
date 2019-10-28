const player1 = 'X';
const player2 = 'O';

let cellSum = [];
let cellWin = [
    [1,2,3] , [1,5,9], [1,4,7],
    [2,5,8] , [3,5,7], [3,6,9],
    [4,5,6] , [7,8,9]
];


let board = document.getElementById('board')
    .addEventListener('click', cellClick);
let cell = document.getElementById('cell');

let cellId = function(c1) {
    Number.parseInt(c1.id.replace('c', ''));
}

let emptyCells = function() { 
    grid().filter(_c1 => _c1.innerText === '')
}

let compare = function(arr) {
    arr.every(_c1 => _c1.innerText === arr[0].innerText && c1.innerText !== '');
}

let turn = function(index, letter) {
    grid()[index].innerText = letter;
}

function cellClick(evt) {
    
}