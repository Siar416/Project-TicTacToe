const GAMEBOARD = document.getElementById('gameBoard');
const GRIDAREA = document.querySelectorAll('.gridArea');


const Player = (name, selection, moves) => {
    return { name, selection, moves}
}

const player1 = Player('Siar', 'X', 0);
const player2 = Player('Zinny', 'O', 0)


const GameBoardObj = {
    gameboard: ['X', 'O']
};


function game() {
    for(let i = 0; i < GRIDAREA.length; i++) {
        GRIDAREA[i].addEventListener('click', () => {
           if(GRIDAREA[i].textContent === player1.selection || GRIDAREA[i].textContent === player2.selection) {
                alert('Spot taken!');
            } else if(GRIDAREA[i].textContent === '') {
                //let selected = document.createElement('p');
                //selected.textContent = player1.selection;
                //player1.moves++;
                //GRIDAREA[i].appendChild(selected);
                GRIDAREA[i].textContent = player1.selection;
            }
        });
    }
}
game();



