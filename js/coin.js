let coinTimeout;
let coinInterval;
function createCoin() {
  let coin = $('<img id="coin" class="coin" src="assets/coin.png"></img>');
  let coinHeight = Math.random() * 100 + 50;
  $("#game-container").append(coin);
  coin.css({ right: "-50px", bottom: coinHeight + "px" });

  coin.animate({ right: "100vw" }, 3000, "linear", function () {
    coin.remove();
  });
  return coin;
}

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
function generateAndCheckCollisionWithCoin() {
  let randomTime = Math.floor(Math.random() * (1200 - 800 + 1)) + 800;

  coinTimeout = setTimeout(() => {
    const coin = createCoin();

    coinInterval = setInterval(() => {
      checkCollisionWithCoin(coin);
    }, 50);

    generateAndCheckCollisionWithCoin();
  }, randomTime);
}

function stopGenerateCoins() {
  clearInterval(coinInterval);
  clearTimeout(coinTimeout);
}
