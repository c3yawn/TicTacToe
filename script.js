let play_board = ["", "", "", "", "", "", "", "", "",];
let gameState = "nd";
let winner;

function checkWin()
{
    if (play_board[0] !== "" && play_board[0] === play_board[1] && play_board[1] === play_board[2]) {
        gameState = "done";
        winner = play_board[0];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[0] !== "" && play_board[0] === play_board[3] && play_board[3] === play_board[6]) {
        gameState = "done";
        winner = play_board[0];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[0] !== "" && play_board[0] === play_board[4] && play_board[4] === play_board[8]) {
        gameState = "done";
        winner = play_board[0];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[1] !== "" && play_board[1] === play_board[4] && play_board[4] === play_board[7]) {
        gameState = "done";
        winner = play_board[1];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[2] !== "" && play_board[2] === play_board[5] && play_board[5] === play_board[8]) {
        gameState = "done";
        winner = play_board[2];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[3] !== "" && play_board[3] === play_board[4] && play_board[4] === play_board[5]) {
        gameState = "done";
        winner = play_board[3];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[6] !== "" && play_board[6] === play_board[7] && play_board[7] === play_board[8]) {
        gameState = "done";
        winner = play_board[6];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    else if (play_board[2] !== "" && play_board[2] === play_board[4] && play_board[4] === play_board[6]) {
        gameState = "done";
        winner = play_board[2];
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
    
    var checker=0;
    for(i=0;i<play_board.length;i++)
    {
        if (play_board[i] !== "")
            checker++;
    }
    
    if (checker === 9)
    {
        gameState = "done";
        winner = "Tie!";
        document.getElementById("winner").innerHTML = "Winner is: " + winner;
    }
}

function draw_board(buttonID) {
    checkWin();
    switch(buttonID)
    {
        case "a1": 
            if(play_board[0] === "" && gameState !== "done")
            {
                play_board[0] = "Player";
                a1.innerHTML = "X";
                a1.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "a2": 
            if(play_board[1] === "" && gameState !== "done")
            {
                play_board[1] = "Player";
                a2.innerHTML = "X";
                a2.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "a3": 
            if(play_board[2] === "" && gameState !== "done")
            {
                play_board[2] = "Player";
                a3.innerHTML = "X";
                a3.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "b1": 
            if(play_board[3] === "" && gameState !== "done")
            {
                play_board[3] = "Player";
                b1.innerHTML = "X";
                b1.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "b2": 
            if(play_board[4] === "" && gameState !== "done")
            {
                play_board[4] = "Player";
                b2.innerHTML = "X";
                b2.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "b3": 
            if(play_board[5] === "" && gameState !== "done")
            {
                play_board[5] = "Player";
                b3.innerHTML = "X";
                b3.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "c1": 
            if(play_board[6] === "" && gameState !== "done")
            {
                play_board[6] = "Player";
                c1.innerHTML = "X";
                c1.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "c2": 
            if(play_board[7] === "" && gameState !== "done")
            {
                play_board[7] = "Player";
                c2.innerHTML = "X";
                c2.classList.add("occupied");
                addComputerMove();
            }
            break;
            
        case "c3": 
            if(play_board[8] === "" && gameState !== "done")
            {
                play_board[8] = "Player";
                c3.innerHTML = "X";
                c3.classList.add("occupied");
                addComputerMove();
            }
            break;
    }
}

function addComputerMove()
{
    checkWin();
    if (gameState !== "done")
    {
    do {
        selected = Math.floor(Math.random() * 9);
    } while (play_board[selected] != "");
    play_board[selected] = "Computer";
    switch(selected)
    {
        case 0: 
                play_board[0] = "Computer";
                a1.innerHTML = "O";
                a1.classList.add("occupied");
            break;
        case 1: 
                play_board[1] = "Computer";
                a2.innerHTML = "O";
                a2.classList.add("occupied");
            break;
        case 2: 
                play_board[2] = "Computer";
                a3.innerHTML = "O";
                a3.classList.add("occupied");
            break;
        case 3: 
                play_board[3] = "Computer";
                b1.innerHTML = "O";
                b1.classList.add("occupied");
            break;
        case 4: 
                play_board[4] = "Computer";
                b2.innerHTML = "O";
                b2.classList.add("occupied");
            break;
        case 5: 
                play_board[5] = "Computer";
                b3.innerHTML = "O";
                b3.classList.add("occupied");
            break;
        case 6: 
                play_board[6] = "Computer";
                c1.innerHTML = "O";
                c1.classList.add("occupied");
            break;
        case 7: 
                play_board[7] = "Computer";
                c2.innerHTML = "O";
                c2.classList.add("occupied");
            break;
        case 8: 
                play_board[8] = "Computer";
                c3.innerHTML = "O";
                c3.classList.add("occupied");
            break;       
    }
    }
    checkWin();
}

function reset_board() {
    document.getElementById("winner").innerHTML = "";
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    a1.classList.remove("occupied");
    a2.classList.remove("occupied");
    a3.classList.remove("occupied");
    b1.classList.remove("occupied");
    b2.classList.remove("occupied");
    b3.classList.remove("occupied");
    c1.classList.remove("occupied");
    c2.classList.remove("occupied");
    c3.classList.remove("occupied");
    gameState = "nd";
    winner = "";
    for (i=0;i<play_board.length;i++)
    {
        play_board[i] = "";
    }
}