const GAMEBOARD = document.getElementById('gameBoard');
const GRIDAREA = document.querySelectorAll('.gridArea');


const Player = (name, selection, moves) => {
    return { name, selection, moves}
}

const player1 = Player('Siar', 'X', 0);
const player2 = Player('Zinny', 'O', 0)


const GameBoardObj = {
    gameboard: ['X', 'O'],
    player: function(name) {
        const getName = () => name;

        return { getName }
    },

};

/*
for (let i = 0; i < GRIDAREA.length; i++) {
    GRIDAREA[i].addEventListener('click', () =>{
        if(GRIDAREA[i].textContent === player1.selection || GRIDAREA[i].textContent === player2.selection) {
            alert('Oops! That spot is taken');
        } else if(GRIDAREA[i].textContent === '') {
            let selected = document.createElement('p');
            selected.textContent = player1.selection;
            player1.moves++;
            GRIDAREA[i].appendChild(selected);
        }
    });
}
*/

let xCounter = 0;
let oCounter = 0;

const game = function() {
    for(let i = 0; i < GRIDAREA.length; i++) {
        GRIDAREA[i].addEventListener('click', () =>{
            if(GRIDAREA[i].textContent === player1.selection || GRIDAREA[i].textContent === player2.selection) {
                alert('Oops! That spot is taken');
            } else if(GRIDAREA[i].textContent === '') {
                let selected = document.createElement('p');
                selected.textContent = player1.selection;
                player1.moves++;
                xCounter++;
                GRIDAREA[i].appendChild(selected);
            }
        });
    }
}

const playerMoves = (function() {
    
})();


