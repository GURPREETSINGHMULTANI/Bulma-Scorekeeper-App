let playerOneScore = 0;
let playerTwoScore = 0;


refreshScoreCard();

function refreshScoreCard() {
    document.querySelector('h1 > span').innerText = playerOneScore;
    document.querySelector('h1 > span + span').innerText = playerTwoScore;
    document.querySelector('h1').style.color = 'black';
}

document.querySelector('button[id="btn1"]').addEventListener('click', function (e) {
    if (playerOneScore != document.querySelector('select').value && playerTwoScore != document.querySelector('select').value) {
        playerOneScore++;
    }
    if (playerOneScore == document.querySelector('select').value) {
        changeColorOnWin();
        this.disabled = true;
        document.querySelector('button[id="btn2"]').disabled = true;
    }

    refreshScoreCard();
});

document.querySelector('button[id="btn2"]').addEventListener('click', function (e) {
    if (playerOneScore != document.querySelector('select').value && playerTwoScore != document.querySelector('select').value) {
        playerTwoScore++;
    }


    if (playerTwoScore == document.querySelector('select').value) {
        changeColorOnWin();
        this.disabled = true;
        document.querySelector('button[id="btn1"]').disabled = true;
    }

    refreshScoreCard();
});

document.querySelector('button[id="reset"]').addEventListener('click', function (e) {
    playerTwoScore = 0;
    playerOneScore = 0;
    document.querySelector('h1 > span').style.color = 'black';
    document.querySelector('h1 > span + span').style.color = 'black';
    document.querySelector('button[id="btn1"]').disabled = false;
    document.querySelector('button[id="btn2"]').disabled = false;
    refreshScoreCard();
});

function changeColorOnWin() {
    if (playerOneScore > playerTwoScore) {
        document.querySelector('h1 > span').style.color = 'green';
        document.querySelector('h1 > span + span').style.color = 'red';
    };
    if (playerOneScore < playerTwoScore) {
        document.querySelector('h1 > span').style.color = 'red';
        document.querySelector('h1 > span + span').style.color = 'green';
    };
}





// function checkWinner() {
//     if (playerOneScore == document.querySelector('select').value) {
//         document.querySelector('button[id="btn1"]').disabled = true;
//         document.querySelector('button[id="btn2"]').disabled = true;
//     }
//     else if (playerTwoScore == document.querySelector('select').value) {
//         document.querySelector('button[id="btn1"]').disabled = true;
//         document.querySelector('button[id="btn2"]').disabled = true;
//     }


// }