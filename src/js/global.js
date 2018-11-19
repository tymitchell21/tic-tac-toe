let currentPlayer = 'X';
let nextPlayer = 'O';
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const handleClick = function(event) {
    const cell = event.target;
    cell.innerHTML = currentPlayer;

    // essentially switches whose turn it is each time a selection is made
    if (currentPlayer === 'X') {
        playerSelections = playerXSelections;
        nextPlayer = '0';
    } else {
        playerSelections = playerOSelections;
        nextPlayer = 'X';
    }
    playerSelections.push(Number(cell.id));

    if (checkWinner(playerSelections)) {
        alert('Player ' + currentPlayer + ' wins!');
        resetGame();
    }
    if (checkDraw()) {
        alert('Draw!');
        resetGame();
    }
    // Swap players
    currentPlayer = nextPlayer;

}

function checkWinner (player) {
    // Check if player has all values of each combination
    winningCombinations.forEach (each => {
        let matches = 0
        for (let i = 0; i < each.length; i++) {
        // cells.forEach (x => {
            if (player.includes(each[i])) {
                matches++
            }
            else break // go to the next combination
            console.log(matches)
            if (matches === each.length) {
                console.log('here')
                return true
            }
        // })
        }
    // if we made it through each combo without returning true,
    // then there were no matches and player did not win
    return false
    })
}

function checkDraw() {
    return (playerOSelections.length + playerXSelections.length) >= cells.length;
}

function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
    }
}

const cells = document.querySelectorAll("td");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}