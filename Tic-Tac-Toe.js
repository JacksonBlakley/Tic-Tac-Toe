const gameboard = (() => {
    var array = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    return {array}
}) ();

const player = (name, symbol) => {
    return {name, symbol}
}

const player1 = player("jim", "O");
const player2 = player("kyle", "X");

gameboard.array[2] = 637364747;

console.log("gameboardArray = " + gameboard.array);
console.log("player 1: " + Object.entries(player1));
console.log("player 2: " + player2.name + player2.symbol);


const displayController = (() => {
    const container = document.querySelector('#gameboard')

    for(var i = 0; i < 9; i++) {
        const content = document.createElement('div');
        const textContent = document.createElement('div')
        textContent.classList = 'symbol';
        textContent.textContent = gameboard.array[i];
        content.classList = 'box';
        content.id = i;
        content.appendChild(textContent);
        container.appendChild(content);

    }
})();