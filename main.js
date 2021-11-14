// Globals
const GAMEBOARD = document.getElementById('gameBoard');
const CELL = document.querySelectorAll('[data-index]');
const boxes = Array.from(document.getElementsByClassName('gridArea'));
const restartBTN = document.getElementById('restartBTN');

// player factory function
const Player = (name, selection, moves) => {
    return { name, selection, moves }
}


const player1 = Player('Siar', 'X', 0);
const player2 = Player('Zinny', 'O', 0)


const GameBoardObj = {
    gameboard: [null, null, null, null, null, null, null, null, null]
};

// switching betweens
let currentPlayer = player1;
function turns() {
    if(currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
}

// different win combos 
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
                winCheck();
                drawCheck();
                turns();
            } else {
                CELL[i].textContent = currentPlayer.selection;
                GameBoardObj.gameboard[i] = CELL[i].textContent;
                currentPlayer.moves++;
                winCheck();
                turns();
            }
        });
    }
}
game();



function winCheck() {
    let result = document.getElementById('result');
    if(CELL[0].textContent === currentPlayer.selection) {
        if(CELL[1].textContent === currentPlayer.selection && CELL[2].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
        if(CELL[3].textContent === currentPlayer.selection && CELL[6].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
        if(CELL[4].textContent === currentPlayer.selection && CELL[8].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
    }
    if(CELL[8].textContent === currentPlayer.selection) {
        if(CELL[2].textContent === currentPlayer.selection && CELL[5].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
        if(CELL[6].textContent === currentPlayer.selection && CELL[7].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
    }
    if(CELL[4].textContent === currentPlayer.selection) {
        if(CELL[1].textContent === currentPlayer.selection && CELL[7].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
        if(CELL[3].textContent === currentPlayer.selection && CELL[5].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
            return true;
        }
        if(CELL[2].textContent === currentPlayer.selection && CELL[6].textContent === currentPlayer.selection) {
            result.textContent = `${currentPlayer.selection} wins`;
        }
    }
}

// checks for draw game
function drawCheck() {
    if(currentPlayer.moves === 5) {
        result.textContent = 'Draw';
        return;
    }
}

// rendering the board
    (function drawBoard() {
    boxes.forEach((box, index) => {
        let styleString = [];
        if(index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if(index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
    });
})();

//resetting everything
restartBTN.addEventListener('click', () => {
    CELL.forEach((cell, index) => {
        cell[index] = null;
        player1.moves = 0;
        player2.moves = 0;
        result.textContent = "let's Play";
    })
    boxes.forEach(box => {
        box.innerHTML = '';
        GameBoardObj.gameboard = [null, null, null, null, null, null, null, null, null];
        currentPlayer = player1;
    });
});

