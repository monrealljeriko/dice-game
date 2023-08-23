var player1Score = 0;
var player2Score = 0;
var drawScore = 0;
var player1Name = "Player 1";
var player2Name = "Player 2";
var drawCount = 0;

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  /* plyer 1 */
  if (randomNumber1 > randomNumber2) {
    alert(player1Name + " Wins!");
    document.querySelector("h1").textContent = player1Name + " Wins!";
    player1Score++;

    /* plyer 2 */
  } else if (randomNumber2 > randomNumber1) {
    alert(player2Name + " Wins!");
    document.querySelector("h1").textContent = player2Name + " Wins!";
    player2Score++;
  } else {
    alert("Draw!");
    document.querySelector("h1").textContent = "Draw!";
    drawScore++;
  }
  drawCount++;
  document.querySelector(".player1Score").textContent = player1Score;
  document.querySelector(".player2Score").textContent = player2Score;
  document.querySelector(".drawScore").textContent = drawScore;
  document.querySelector(".rollCount").textContent = drawCount;
}

function start() {
  player1Name = prompt("Enter Player 1 Name");
  player2Name = prompt("Enter Player 2 Name");

  if (player1Name === "") {
    player1Name = "Player 1";
  } else if (player2Name === "") {
    player2Name = "Player 2";
  }
  document.querySelector(".player1Name").textContent = player1Name;
  document.querySelector(".player2Name").textContent = player2Name;
  document.querySelector(".start").style.display = "none";
  document.querySelector(".rollMe").style.display = "block";
}

function main() {
  document.querySelector(".rollMe").style.display = "none";

  document.querySelector(".start").addEventListener("click", start);
  document.querySelector(".rollMe").addEventListener("click", rollDice);
}

main();
