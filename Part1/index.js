var board = [];

function play(clickedId) {
    var playerSpan = document.getElementById('player');
    var clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = '0';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = '0';
        board[clickedId] = '0';
    }

    var topLeft = board[0];
    var topCenter = board[1];
    var topRight = board[2];
    var middleLeft = board[3];
    var middleCenter = board[4];
    var middleRight = board[5];
    var bottomLeft = board[6];
    var bottomCenter = board[7];
    var bottomRight = board[8];

    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(middleLeft !== undefined && middleLeft === middleCenter &&  middleLeft === middleRight) {
        alert (`S{middleLeft} is the winner`);
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }
      if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
      if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    
      var boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
    }
