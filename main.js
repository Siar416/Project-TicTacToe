const GAMEBOARD = document.getElementById('gameBoard');
const GRIDAREA = document.querySelectorAll('.gridArea');


const Player = (name, selection, moves) => {
    return { name, selection, moves}
}

const player1 = Player('Siar', 'X', 0);
const player2 = Player('Zinny', 'O', 0)


const GameBoardObj = {
    gameboard: []
};



function turns() {
    if(currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

let currentPlayer = player1;

const winningCombos = [
        [0, 1, 2],
        [3, 4, 6],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
];


function game() {
    for (let i = 0; i < GRIDAREA.length; i++) {
        GRIDAREA[i].addEventListener('click', () => {
            if(GRIDAREA[i].textContent === player1.selection || GRIDAREA[i].textContent === player2.selection) {
                alert('Sorry, spot taken');
            } else if(GRIDAREA[i].textContent === '') {
                GRIDAREA[i].textContent = currentPlayer.selection;
                //GRIDAREA[i].textContent = player1.selection;
                GameBoardObj.gameboard.push(currentPlayer.selection);
                currentPlayer.moves++;
                turns();
            } else {
                GRIDAREA[i].textContent = player2.selection;
                //GRIDAREA[i].textContent = player2.selection;
                GameBoardObj.gameboard.push(player2.selection);
                currentPlayer.moves++;
            }
        });
    }
}
game();

function winCombo() {
    for(let i = 0; i < winningCombos.length; i++) {
       if(winningCombos[i] === GameBoardObj.gameboard) {
           console.log('winner');
       }
    }
}



