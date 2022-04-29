var changeToCross = document.querySelector("body");
var playerTurn = "O";
changeToCross.addEventListener("click", function (event) {
  if (event.target.tagName === "DIV") {
    if (playerTurn == "O") {
      event.target.textContent = "X";
      playerTurn = "X";
    } else {
      event.target.textContent = "O";
      playerTurn = "O";
    }
  }
});
