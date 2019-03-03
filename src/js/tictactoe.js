// alert("test");
var player = "";
var winO = [];
var winX = [];
var winningList = [];
var thisWinner = "";
var oScore, xScore, startSideO, chooseSide, tictactoeBody, popupText, winningRecord, boardReset, gameReset, popupStyle, overlayStyle;

function initGame() {
    oScore = document.getElementById("oScore");
    xScore = document.getElementById("xScore");
    startSideO = document.getElementById("circle");
    chooseSide = document.getElementById("chooseSide");
    tictactoeBody = document.getElementById("tictactoeBody");
    popupText = document.getElementById("text");
    winningRecord = document.getElementById("winningRecord");
    boardReset = document.getElementById("popupbutton");
    gameReset = document.getElementById("gameResetbutton");
    popupStyle = document.getElementById("popup").style;
    overlayStyle = document.getElementById("overlay").style;
}


function chooseOX() {
    if (!startSideO.checked) {
        player = "O";
    } else {
        player = "X";
    };
    chooseSide.style.display = 'none';
    tictactoeBody.style.display = 'block';
    oScore.innerHTML = 0;
    xScore.innerHTML = 0;
}


//reset buttons to none
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).value = "";
        document.getElementById(i).disabled = false;
    };

    popupStyle.visibility = "hidden";
    overlayStyle.visibility = "hidden";
    checkRoundEnd();
    thisWinner = "";
}

//disable all button when winner wins
function buttonsDisable() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).disabled = true;
    };
}

function popupMessage(winner) {
    //disable all buttons
    buttonsDisable();

    //modify popup message
    if (winner === "Draw") {
        popupText.innerHTML = winner;
    } else {
        popupText.innerHTML = winner + " wins.";
    }
    popupStyle.visibility = "visible";
    overlayStyle.visibility = "visible"
    console.log(winner);
    addWinScore(winner);
    addWinningRecord(winner);
}


//check winning combination
function checkGameEnd() {
    //define buttons value
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;

    //1, 2, 3 
    if (((b1 == "X") || (b1 == "O")) && ((b1 == b2) && (b2 == b3))) {
        popupMessage(b1);
        thisWinner = b1;
    }
    //1, 4, 7
    else if (((b1 == "X") || (b1 == "O")) && ((b1 == b4) && (b4 == b7))) {
        popupMessage(b1);
        thisWinner = b1;
    }
    //7, 8, 9
    else if (((b9 == "X") || (b9 == "O")) && ((b9 == b8) && (b8 == b7))) {
        popupMessage(b9);
        thisWinner = b9;
    }
    //3, 6, 9
    else if (((b9 == "X") || (b9 == "O")) && ((b9 == b6) && (b6 == b3))) {
        popupMessage(b9);
        thisWinner = b9;
    }
    //4, 5, 6
    else if (((b4 == "X") || (b4 == "O")) && ((b4 == b5) && (b5 == b6))) {
        popupMessage(b4);
        thisWinner = b4;
    }
    //2, 5, 8
    else if (((b2 == "X") || (b2 == "O")) && ((b2 == b5) && (b5 == b8))) {
        popupMessage(b2);
        thisWinner = b2;
    }
    //1, 5, 9
    else if (((b1 == "X") || (b1 == "O")) && ((b1 == b5) && (b5 == b9))) {
        popupMessage(b1);
        thisWinner = b1;
    }
    //3, 5, 7
    else if (((b7 == "X") || (b7 == "O")) && ((b7 == b5) && (b5 == b3))) {
        popupMessage(b7);
        thisWinner = b7;
    }
    //check draw case
    else if (((b1 !== "") && (b2 !== "") && (b3 !== "") && (b4 !== "") && (b5 !== "") && (b6 !== "") && (b7 !== "") && (b8 !== "") && (b9 !== "")) && thisWinner === "") {
        popupMessage("Draw");
    }
};


//Set Button Value
function setValue(buttonId, player) {
    document.getElementById(buttonId).value = player;
    document.getElementById(buttonId).disabled = true;
    checkGameEnd();
}

//Set Player turn
function setPlayer(button) {
    if (player == "X") {
        player = "O";
        setValue(button, player);
    }
    else {
        if (player == "O") {
            player = "X";
            setValue(button, player);
        };
    };
}

//add dashboard score when O / X wins
function addWinScore(gameWinner) {
    if (gameWinner === "O") {
        winO.push(gameWinner);
        oScore.innerHTML = winO.length;
    } else if (gameWinner === "X") {
        winX.push(gameWinner);
        xScore.innerHTML = winX.length;
    };
}

//display Game history
function addWinningRecord(gameWinner) {
    winningList.push(gameWinner);
    if (gameWinner === "Draw") {
        winningRecord.innerHTML += ('<p>' + gameWinner + '</p>');
    } else if (gameWinner === "O" || gameWinner === "X") {
        winningRecord.innerHTML += ('<p>' + gameWinner + ' wins</p>');
    };
}

//reset page
function allReset() {
    reset();
    oScore.innerHTML = 0;
    xScore.innerHTML = 0;
    winningList = [];
    winO = [];
    winX = [];
    winningRecord.innerHTML = "";
    popupStyle.visibility = "hidden";
    overlayStyle.visibility = "hidden";
}

//Check final winner
function checkRoundEnd() {
    if (winO.length >= 3 || winX.length >= 3) {
        var popupText = document.getElementById("text");
        if (winO.length > winX.length) {
            popupText.innerHTML = "O is the winner~~~~"
        } else {
            popupText.innerHTML = "X is the winner~~~~"
        };
        boardReset.style.display = "none";
        gameReset.style.display = "block";
        popupStyle.visibility = "visible";
        overlayStyle.visibility = "visible";
    }
}

//restart the game when the game is ended
function reGame() {
    allReset();
    popupStyle.visibility = "hidden";
    overlayStyle.visibility = "hidden"
    chooseSide.style.display = 'block';
    tictactoeBody.style.display = 'none';
    boardReset.style.display = "block";
    gameReset.style.display = "none";
}
