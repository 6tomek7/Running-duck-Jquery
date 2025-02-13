let score = 0;
let lvl = 1;
let obstacleTravelTime = [1500, 1000, 800];
let coinTravelTime = [2000, 1600, 1200];

function startGame() {
  $("#play-button").click(() => {
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

$(document).ready(() => {
  startGame();
  // pauseGame();
});
