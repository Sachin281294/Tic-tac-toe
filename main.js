var changeToCross = document.querySelector(".container");
var resetButton = document.querySelector(".resetButton");
var playerTurn = "X";
var emptyString = "";
var one = document.querySelector(".box1");
var two = document.querySelector(".box2");
var three = document.querySelector(".box3");
var four = document.querySelector(".box4");
var five = document.querySelector(".box5");
var six = document.querySelector(".box6");
var seven = document.querySelector(".box7");
var eight = document.querySelector(".box8");
var nine = document.querySelector(".box9");
var winningText = document.querySelector(".winningText");
var turn = document.querySelector(".turn");
turn.textContent = "X turn";
var scoreone = document.querySelector(".score1");
scoreone.textContent = 0;
var scoreone_count = 0;
var scoretwo = document.querySelector(".score2");
scoretwo.textContent = 0;
var scoretwo_count = 0;
var count = 0;
one.textContent = emptyString;
two.textContent = emptyString;
three.textContent = emptyString;
four.textContent = emptyString;
five.textContent = emptyString;
six.textContent = emptyString;
seven.textContent = emptyString;
eight.textContent = emptyString;
nine.textContent = emptyString;
winningText.textContent = emptyString;
var winningCondition = false;
var player_one = prompt("Please enter your Player1 name:", "Player 1");
var player_two = prompt("Please enter your Player2 name:", "Player 2");
document.querySelector(".player1").textContent = player_one + " :";
document.querySelector(".player2").textContent = player_two + " :";
function startGame(event) {
  if (
    event.target.tagName === "DIV" &&
    event.target.textContent === emptyString &&
    winningCondition === false
  ) {
    if (playerTurn == "X") {
      event.target.textContent = "X";
      turn.textContent = "O turn";
      playerTurn = "O";
    } else {
      event.target.textContent = "O";
      turn.textContent = "X turn";
      playerTurn = "X";
    }
  }
  count++;

  if (
    one.textContent == "X" &&
    one.textContent == two.textContent &&
    two.textContent == three.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    one.textContent == "X" &&
    one.textContent == four.textContent &&
    four.textContent == seven.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    one.textContent == "X" &&
    one.textContent == five.textContent &&
    five.textContent == nine.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    two.textContent == "X" &&
    two.textContent == five.textContent &&
    five.textContent == eight.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    four.textContent == "X" &&
    four.textContent == five.textContent &&
    five.textContent == six.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    three.textContent == "X" &&
    three.textContent == six.textContent &&
    six.textContent == nine.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    three.textContent == "X" &&
    three.textContent == five.textContent &&
    five.textContent == seven.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    seven.textContent == "X" &&
    seven.textContent == eight.textContent &&
    eight.textContent == nine.textContent
  ) {
    winningText.textContent = "X is the Winner!";
    scoreone_count++;
    scoreone.textContent = scoreone_count;
    winningCondition = true;
    playerTurn = "X";
  } else if (
    one.textContent == "O" &&
    one.textContent == two.textContent &&
    two.textContent == three.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    one.textContent == "O" &&
    one.textContent == four.textContent &&
    four.textContent == seven.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    one.textContent == "O" &&
    one.textContent == five.textContent &&
    five.textContent == nine.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    two.textContent == "O" &&
    two.textContent == five.textContent &&
    five.textContent == eight.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    four.textContent == "O" &&
    four.textContent == five.textContent &&
    five.textContent == six.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    three.textContent == "O" &&
    three.textContent == six.textContent &&
    six.textContent == nine.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    three.textContent == "O" &&
    three.textContent == five.textContent &&
    five.textContent == seven.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (
    seven.textContent == "O" &&
    seven.textContent == eight.textContent &&
    eight.textContent == nine.textContent
  ) {
    winningText.textContent = "O is the Winner!";
    scoretwo_count++;
    scoretwo.textContent = scoretwo_count;
    winningCondition = true;
    playerTurn = "O";
  } else if (count == 9) {
    winningText.textContent = "It's a Draw!";
  }
}
changeToCross.addEventListener("click", startGame);
resetButton.addEventListener("click", function (event1) {
  one.textContent = emptyString;
  two.textContent = emptyString;
  three.textContent = emptyString;
  four.textContent = emptyString;
  five.textContent = emptyString;
  six.textContent = emptyString;
  seven.textContent = emptyString;
  eight.textContent = emptyString;
  nine.textContent = emptyString;
  turn.textContent = "X turn";
  winningText.textContent = emptyString;
  count = 0;
  winningCondition = false;
  playerTurn = "X";
});
