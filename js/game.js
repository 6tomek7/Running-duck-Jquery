let score;
let obstacleTravelTime = [1500, 1000, 800];
let coinTravelTime = [2000, 1600, 1200];
let isPlaying = false;

function startGame() {
  $("#play-button").click(() => {
    initialDuck();
    setInitalValues();
    isPlaying = true;
    $("#play-button").hide();
    initialClouds();
    generateAndCheckCollisionWithCoin();
    generateAndCheckCollisionWithObstacle();
  });
}

function endGame() {
  $(".obstacle, .coin, .cloud, .duck").stop();
  stopGenerateObstacle();
  stopGenerateCoins();
  stopGenerateCloud();
  isPlaying = false;

  setTimeout(() => {
    removeGeneratedImages();
    $("#play-button").show();
  }, 2000);
}

function setInitalValues() {
  score = 0;
  $("#level").text(1);
  $("#score").text(score);
}

function removeGeneratedImages() {
  $("img").remove(".cloud");
  $("img").remove(".coin");
  $("img").remove(".obstacle");
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
    score === 31 && $("#next-level-sound")[0].play();
    $("#level").text(2);
  } else if (score > 60 && score < 100) {
    $("#level").text(3);
    score === 61 && $("#next-level-sound")[0].play();
  } else {
    winGame();
  }
}

$(document).ready(() => {
  startGame();
});
