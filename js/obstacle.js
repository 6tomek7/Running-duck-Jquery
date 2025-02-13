let obstacleTimeout;
let obstacleInterval;

function createObstacle() {
  let obstacle = $('<img id="obstacle" class="obstacle" src="assets/cactus.png"></img>');
  $("#game-container").append(obstacle);

  obstacle.animate({ right: "100vw" }, 2000, "linear", function () {
    $(this).remove();
  });

  return obstacle;
}

function checkCollisionWithObstacle(obstacle) {
  const duck = $("#duck")[0].getBoundingClientRect();
  const obstacleRect = obstacle[0].getBoundingClientRect();

  if (
    duck.left < obstacleRect.right &&
    duck.right > obstacleRect.left &&
    duck.top < obstacleRect.bottom &&
    duck.bottom > obstacleRect.top
  ) {
    loseGame();
    setTimeout(() => {
      obstacle.remove();
    }, 1850);
  }
}

function generateAndCheckCollisionWithObstacle() {
  let randomTime = Math.floor(Math.random() * (1200 - 800 + 1)) + 800;

  obstacleTimeout = setTimeout(() => {
    const obstacle = createObstacle();

    obstacleInterval = setInterval(() => {
      checkCollisionWithObstacle(obstacle);
    }, 50);

    generateAndCheckCollisionWithObstacle();
  }, randomTime);
}

function stopGenerateObstacle() {
  clearInterval(obstacleInterval);
  clearTimeout(obstacleTimeout);
}
