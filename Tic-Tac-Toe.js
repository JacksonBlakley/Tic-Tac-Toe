const gameboard = (() => {
    var array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    return {array}
}) ();

const player = (name, symbol) => {
    return {name, symbol}
}

const player1 = player("player1", "O");
const player2 = player("player2", "X");


const displayController = (() => {
    const container = document.querySelector('#gameboard');
    const winningText = document.querySelector("#winText");
    var current = player1;
    var counter = 0;

    function flipCurrent () {
        if(current.symbol == player1.symbol) {
        current = player2;
        }
        else {
        current = player1;
        }              

    }


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
              textContent.textContent = current.symbol;
              div.appendChild(textContent);
              gameboard.array[div.id] = current.symbol;
              counter++
              flipCurrent();
          } 

           //check for victory in rows
            var r = 0;
            for(r = 0; r < 7; r = r+3) {
            var a = gameboard.array[r];
             var b = gameboard.array[r+1];
             var c = gameboard.array[r+2];
                console.log("r = " + r);
            if(a == b && b == c && a != " " && b != " " && c != " " && counter < 9) { 
                flipCurrent();
                winningText.innerHTML = `Row Victory by ${current.symbol}!`;
                counter = 9;
                }
            }
            //check for victory in columns
            var col = 0;
            for(col = 0; col < 3; col = col + 1) {
            var  d = gameboard.array[col];
             var e = gameboard.array[col+3];
             var f = gameboard.array[col+6];
            if(d == e && e == f && d != " " && e != " " && f != " " && counter < 9) {
                flipCurrent ();
                winningText.innerHTML = `Column Victory by ${current.symbol}!`;
                counter = 9;
                }
            }

            //check for victory diagonally
            if(gameboard.array[0] == gameboard.array[4] && gameboard.array[4] == gameboard.array[8] && gameboard.array[0] != " " && gameboard.array[4] != " " && gameboard.array[8] != " " && counter < 9) {
               flipCurrent();
                winningText.innerHTML = `Diagonal Victory From Top Left by ${current.symbol}!`;
                counter = 9;

            }
            
            else if (gameboard.array[2] == gameboard.array[4] && gameboard.array[4] == gameboard.array[6] && gameboard.array[2] != " " && gameboard.array[4] != " " && gameboard.array[6] != " " && counter < 9) {
                flipCurrent();
                winningText.innerHTML = `Diagonal Victory From Top Right by ${current.symbol}!`;
                console.log("diagonal victory from top right!");
                counter = 9;
            }
      })  
    })
    //event listener for clear button
   const clearBtn = document.querySelector('#resetBtn');
   clearBtn.addEventListener('click', () => {
       allBox.forEach((div) => {
           div.innerHTML = "";
       })
       winningText.innerHTML = "O goes first!";
       counter = 0;
       gameboard.array = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
   })
})();