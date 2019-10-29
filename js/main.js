// Below in comment is not my code. Its a ref. used to learn how it was implemented.
// Still in the learning process on 'how it works' and 'how to implement'

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

var grid = Array.from(document.getElementsByClassName('grid'));
function click(evt) {
    console.log(evt);
}
click();

function enableClicks() {
    grid.forEach(_gridEl.addEventListener('click', click));
}
function disableClicks() {
    grid.forEach(_gridEl.removeEventListener('click', click));
}



//This returns an array using Array.from of that query list. This should then return an array of each element within the class name. ['q0', 'q1', 'q2', ...]
// const grid = () => Array.from(document.getElementsByClassName('q'));

//1. grid() is now being called with .forEach. So forEach qEl(qElement) that is clicked, return a click function (.eventListener)
// const enableListeners = () => grid().forEach(_qEl => _qEl.addEventListener('click', clickFn));

//1. So now we call the click even by calling 'clickFn'. This event is a function that holds
//1.1 :: variable takeTurn is called which...
//1.2 :: within takeTurn, qNumId is called which then holds the function qEl. So for .forEach qEl that is clicked it takes that element 'q0, q1, q2, ...' and removes the q so now it becomes just a number within an array [0, 1, 2, ...]
//1.3 :: if(!clickForWin())
//1.4 :: opponentTurn();

//const clickFn = ($event) => {
//     takeTurn(qNumId($event.target), 'X'); <-----> //const takeTurn = (index, letter) => grid()[index].innerText = letter; :: //const qNumId = (qEl) => Number.parseInt(qEl.id.replace('q', '')); 
//     if(!checkForWin())
//     opponentTurn();
// };




// const qNumId = (qEl) => Number.parseInt(qEl.id.replace('q', ''));
// const emptyQs = () => grid().filter(_qEl => _qEl.innerText === '');
// const allSame = (arr) => arr.every(_qEl => _qEl.innerText === arr[0].innerText && _qEl.innerText !== '');

// const takeTurn = (index, letter) => grid()[index].innerText = letter;
// const opponentChoice = () => qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);

// const endGame = (winningSequence) => {
//     winningSequence.forEach(_qEl => _qEl.classList.add('winner'));
//     disableListeners();
// }
// const checkForWin = () => {
//     let victory = false;

//     winningCombos.forEach(_c => {
//         const _grid = grid();
//         const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]];
//         if(allSame(sequence)) {
//             victory = true;
//             endGame(sequence);
//         }
//     });

//     return victory;
// }

// const opponentTurn = () => {
//     disableListeners();
//     setTimeout(() => {
//         takeTurn(opponentChoice(), 'O');
//         if(!checkForWin())
//         enableListeners();
//     }, 1000);
// }

// const clickFn = ($event) => {
//     takeTurn(qNumId($event.target), 'X');
//     if(!checkForWin())
//     opponentTurn();
// };

// const enableListeners = () => grid().forEach(_qEl => _qEl.addEventListener('click', clickFn));
// const disableListeners = () => grid().forEach(_qEl => _qEl.removeEventListener('click', clickFn));

// enableListeners();