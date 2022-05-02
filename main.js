var changeToCross = document.querySelector("body");
var playerTurn = "X";
var one = document.querySelector(".box1");
var two = document.querySelector(".box2");
var three = document.querySelector(".box3");
var four = document.querySelector(".box4");
var five = document.querySelector(".box5");
var six = document.querySelector(".box6");
var seven = document.querySelector(".box7");
var eight = document.querySelector(".box8");
var nine = document.querySelector(".box9");

changeToCross.addEventListener("click", function (event) {
  if (event.target.tagName === "DIV" && event.target.textContent == "") {
    if (playerTurn == "X") {
      event.target.textContent = "X";
      playerTurn = "O";
    } else {
      event.target.textContent = "O";
      playerTurn = "X";
    }
  }
});

if (
  one.textContent == "X" &&
  one.textContent == two.textContent &&
  two.textContent == three.textContent
) {
  alert("X is the winner");
} else if (
  one.textContent == "X" &&
  one.textContent == four.textContent &&
  four.textContent == seven.textContent
) {
  alert("X is the winner");
} else if (
  one.textContent == "X" &&
  one.textContent == five.textContent &&
  five.textContent == nine.textContent
) {
  alert("X is the winner");
} else if (
  two.textContent == "X" &&
  two.textContent == five.textContent &&
  five.textContent == eight.textContent
) {
  alert("X is the winner");
} else if (
  four.textContent == "X" &&
  four.textContent == five.textContent &&
  five.textContent == six.textContent
) {
  alert("X is the winner");
} else if (
  three.textContent == "X" &&
  three.textContent == six.textContent &&
  six.textContent == nine.textContent
) {
  alert("X is the winner");
} else if (
  three.textContent == "X" &&
  three.textContent == five.textContent &&
  five.textContent == seven.textContent
) {
  alert("X is the winner");
} else if (
  seven.textContent == "X" &&
  seven.textContent == eight.textContent &&
  eight.textContent == nine.textContent
) {
  alert("X is the winner");
} else if (
  one.textContent == "O" &&
  one.textContent == two.textContent &&
  two.textContent == three.textContent
) {
  alert("O is the winner");
} else if (
  one.textContent == "O" &&
  one.textContent == four.textContent &&
  four.textContent == seven.textContent
) {
  alert("O is the winner");
} else if (
  one.textContent == "O" &&
  one.textContent == five.textContent &&
  five.textContent == nine.textContent
) {
  alert("O is the winner");
} else if (
  two.textContent == "O" &&
  two.textContent == five.textContent &&
  five.textContent == eight.textContent
) {
  alert("O is the winner");
} else if (
  four.textContent == "O" &&
  four.textContent == five.textContent &&
  five.textContent == six.textContent
) {
  alert("O is the winner");
} else if (
  three.textContent == "O" &&
  three.textContent == six.textContent &&
  six.textContent == nine.textContent
) {
  alert("O is the winner");
} else if (
  three.textContent == "O" &&
  three.textContent == five.textContent &&
  five.textContent == seven.textContent
) {
  alert("O is the winner");
} else if (
  seven.textContent == "O" &&
  seven.textContent == eight.textContent &&
  eight.textContent == nine.textContent
) {
  alert("O is the winner");
} else {
  // alert("It's a draw");
}
