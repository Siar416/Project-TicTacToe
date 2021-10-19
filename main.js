const GAMEBOARD = document.getElementById('gameBoard');
const GRIDAREA = document.querySelectorAll('.gridArea');


const Player = (name, selection) => {
    return { name, selection}
}

const player1 = Player('Siar', 'X');


const GameBoardObj = {
    gamebord: ['X', 'O'],
    player: function(name) {
        const getName = () => name;

        return { getName }
    },

};


/*
for (let i = 0; i < GRIDAREA.length; i++) {
    GRIDAREA[i].addEventListener('click', () => {
        if(GRIDAREA[i].textContent === 'X') {
            alert('Oops! Sorry, spot taken');
        } else {
            let playerSelection = document.createElement('p');
            playerSelection.textContent = 'X';
            GRIDAREA[i].appendChild(playerSelection);
        }
    });
}
*/


for (let i = 0; i < GRIDAREA.length; i++) {
    GRIDAREA[i].addEventListener('click', () => {
        if(GRIDAREA[i].textContent === 'X') {
            alert('Oops! Sorry, spot taken');
        } else {
            let selected = document.createElement('p');
            selected.textContent = 'X';
            GRIDAREA[i].appendChild(selected);

        }
    });
}


