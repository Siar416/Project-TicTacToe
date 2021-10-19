const GAMEBOARD = document.getElementById('gameBoard');
const GRIDAREA = document.querySelectorAll('.gridArea');




const GameBoardObj = {
    gamebord: ['X', 'O'],
    player: function(name) {
        const getName = () => name;

        return { getName }
    },

};



for (let i = 0; i < GRIDAREA.length; i++) {
    GRIDAREA[i].addEventListener('click', () => {
        if(GRIDAREA[i].textContent === 'X') {
            console.log('Spot Taken');
        } else {
            let playerSelection = document.createElement('p');
            playerSelection.textContent = 'X';
            GRIDAREA[i].appendChild(playerSelection);
        }
    });
}

