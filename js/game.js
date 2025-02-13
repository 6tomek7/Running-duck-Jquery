let score = 0;
let obstacleTravelTime = [1500, 1000, 800];
let coinTravelTime = [2000, 1600, 1200];

function startGame() {
  $("#play-button").click(() => {
    $("#play-button").remove();
    initialClouds();
    generateAndCheckCollisionWithCoin();
    generateAndCheckCollisionWithObstacle();
  });
}

function pauseGame() {
  $("#pause-button").click(() => {
    $(".coin").stop();
    $(".obstacle").stop();
  });
}

function endGame() {
  $(".obstacle").stop();
  $(".coin").stop();
  $(".cloud").stop();
  $(".duck").stop();
  stopGenerateObstacle();
  stopGenerateCoins();
  stopGenerateCloud();
}

function loseGame() {
  endGame();
  $("#game-over-sound")[0].play();
}

function winGame() {
  endGame();
  $("#win-game-sound")[0].play();
}

function setLevel() {
  if (score <= 30) {
    $("#level").text(1);
  } else if (score > 30 && score <= 60) {
    $("#level").text(2);
  } else if (score > 60 && score < 100) {
    $("#level").text(3);
  } else {
    winGame();
  }
}

$(document).ready(() => {
  startGame();
});
