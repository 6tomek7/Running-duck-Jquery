let score = 0;

function checkCollisionWithCoin(coin) {
  const duck = $("#duck")[0].getBoundingClientRect();
  const coinRect = coin[0].getBoundingClientRect();

  if (
    duck.left < coinRect.right &&
    duck.right > coinRect.left &&
    duck.top < coinRect.bottom &&
    duck.bottom > coinRect.top
  ) {
    coin.remove();
    score++;
    $("#score").text(score);
    $("#coin-sound")[0].play();
  }
}

$(document).ready(() => {
  setInterval(() => {
    const coin = createCoin();
    setInterval(() => {
      checkCollisionWithCoin(coin);
    }, 50);
  }, 2000);
});
