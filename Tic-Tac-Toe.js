const gameboard = (() => {
    var array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    return {array}
}) ();

const player = (name, symbol) => {
    return {name, symbol}
}

const player1 = player("jim", "O");
const player2 = player("kyle", "X");



console.log("gameboardArray = " + gameboard.array);
console.log("player 1: " + Object.entries(player1));
console.log("player 2: " + player2.name + player2.symbol);


const displayController = (() => {
    const container = document.querySelector('#gameboard');
    var currentSymbol = player1.symbol;
    var counter = 0;


    for(var i = 0; i < 9; i++) {
        const content = document.createElement('div');
        content.classList = 'box';
        content.id = i;
        container.appendChild(content);

    }
    //Event Listener for divs and append board array
    const allBox = document.querySelectorAll('.box');
    allBox.forEach((div) => {
      div.addEventListener('click', () => {
          if(counter < 9 && div.innerHTML == "") {
              const textContent = document.createElement('div');
              textContent.classList = 'symbol';
              textContent.textContent = currentSymbol;
              div.appendChild(textContent);
              gameboard.array[div.id] = currentSymbol;
              counter++
              if(currentSymbol == player1.symbol) {
                currentSymbol = player2.symbol;
              }
              else {
                currentSymbol = player1.symbol;
              }
          } 
          console.log(div.id);
          console.log(gameboard.array);
          console.log(counter)
           //check for victory in rows
            var r = 0;
            for(r = 0; r < 7; r = r+3) {
            var a = gameboard.array[r];
             var b = gameboard.array[r+1];
             var c = gameboard.array[r+2];
                console.log("r = " + r);
            if(a == b && b == c && a != " " && b != " " && c != " " ) {
                console.log("row victory!");
                counter = 9;
                }
            }
            //check for victory in columns
            var col = 0;
            for(col = 0; col < 3; col = col + 1) {
            var  d = gameboard.array[col];
             var e = gameboard.array[col+3];
             var f = gameboard.array[col+6];
            console.log("c = " + col);
            if(d == e && e == f && d != " " && e != " " && f != " ") {
                console.log("column victory!");
                counter = 9;
                }
            }

            //check for victory diagonally
            if(gameboard.array[0] == gameboard.array[4] && gameboard.array[4] == gameboard.array[8] && gameboard.array[0] != " " && gameboard.array[4] != " " && gameboard.array[8] != " ") {
                console.log("diagonal victory from top left!");
                conter = 9;
            }
            
            else if (gameboard.array[2] == gameboard.array[4] && gameboard.array[4] == gameboard.array[6] && gameboard.array[2] != " " && gameboard.array[4] != " " && gameboard.array[6] != " ") {
                console.log("diagonal victory from top right!");
                counter = 9;
            }






      })  
    })
   



})();