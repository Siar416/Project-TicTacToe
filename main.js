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


function game() {
    for (let i = 0; i < GRIDAREA.length; i++) {
        GRIDAREA[i].addEventListener('click', () => {
            if(GRIDAREA[i].textContent === player1.selection || GRIDAREA[i].textContent === player2.selection) {
                alert('Sorry, spot taken');
            } else if(GRIDAREA[i].textContent === '') {
                GRIDAREA[i].textContent = currentPlayer.selection;
                //GRIDAREA[i].textContent = player1.selection;
                GameBoardObj.gameboard.push(player1.selection);
                player1.moves++;
                turns();
            } else {
                GRIDAREA[i].textContent = currentPlayer.selection;
                //GRIDAREA[i].textContent = player2.selection;
                GameBoardObj.gameboard.push(player2.selection);
                player2.moves;
                turns();
                
            }
        });
    }
}
game();





