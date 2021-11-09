const GAMEBOARD = document.getElementById('gameBoard');
const CELL = document.querySelectorAll('[data-index]');

const Player = (name, selection, moves) => {
    return { name, selection, moves }
}

const player1 = Player('Siar', 'X', 0);
const player2 = Player('Zinny', 'O', 0)


const GameBoardObj = {
    gameboard: [null, null, null, null, null, null, null, null, null]
};


let currentPlayer = player1;
function turns() {
    if(currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}


const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];


function game() {
    for(let i = 0; i < CELL.length; i++) {
        CELL[i].addEventListener('click', () => {
            if(CELL[i].textContent === player1.selection || CELL[i].textContent === player2.selection) {
                alert('Sorry, spot taken');
            } else if(CELL[i].textContent === '') {
                CELL[i].textContent = currentPlayer.selection;
                GameBoardObj.gameboard[i] = CELL[i].textContent;
                currentPlayer.moves++;
                turns();
            } else {
                CELL[i].textContent = currentPlayer.selection;
                GameBoardObj.gameboard[i] = CELL[i].textContent;
                currentPlayer.moves++;
                turns();
            }
            winCheck();
        });
    }
}
game();



function winCheck() {
    if(CELL[0].textContent === player1.selection) {
        if(CELL[1].textContent === player1.selection && CELL[2].textContent === player1.selection) {
            console.log('Player 1 wins top');
            return true;
        }
        if(CELL[3].textContent === player1.selection && CELL[6].textContent === player1.selection) {
            console.log('Player 1 wins on left');
            return true;
        }
        if(CELL[4].textContent === player1.selection && CELL[8].textContent === player1.selection) {
            console.log('Player 1 wins diagonally');
            return true;
        }
    }
    if(CELL[8].textContent === player1.selection) {
        if(CELL[2].textContent === player1.selection && CELL[5].textContent === player1.selection) {
            console.log('Player 1 wins on right');
            return true;
        }
        if(CELL[6].textContent === player1.selection && CELL[7].textContent === player1.selection) {
            console.log('Player 1 wins on bottom');
            return true;
        }
    }
    if(CELL[4].textContent === player1.selection) {
        if(CELL[1].textContent === player1.selection && CELL[7].textContent === player1.selection) {
            console.log('Player 1 win vertically in the middle');
            return true;
        }
        if(CELL[3].textContent === player1.selection && CELL[5].textContent === player1.selection) {
            console.log('Player 1 win horizontally in the middle');
            return true;
        }
    }
    if(CELL[0].textContent === player2.selection) {
        if(CELL[1].textContent === player2.selection && CELL[2].textContent === player2.selection) {
            console.log('Player 2 wins top');
            return true;
        }
        if(CELL[3].textContent === player2.selection && CELL[6].textContent === player2.selection) {
            console.log('Player 2 wins on left');
            return true;
        }
        if(CELL[4].textContent === player2.selection && CELL[8].textContent === player2.selection) {
            console.log('Player 2 wins diagonally');
            return true;
        }
    }
    if(CELL[8].textContent === player2.selection) {
        if(CELL[2].textContent === player2.selection && CELL[5].textContent === player2.selection) {
            console.log('Player 2 wins on right');
            return true;
        }
        if(CELL[6].textContent === player2.selection && CELL[7].textContent === player2.selection) {
            console.log('Player 2 wins on bottom');
            return true;
        }
    }
    if(CELL[4].textContent === player2.selection) {
        if(CELL[1].textContent === player2.selection && CELL[7].textContent === player2.selection) {
            console.log('Player 2 win vertically in the middle');
            return true;
        }
        if(CELL[3].textContent === player2.selection && CELL[5].textContent === player2.selection) {
            console.log('Player 2 win horizontally in the middle');
            return true;
        }
    }
}


