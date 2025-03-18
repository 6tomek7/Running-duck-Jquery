let coinTimeout;
let coinInterval;
function createCoin() {
  let coin = $('<img id="coin" class="coin" src="assets/coin.png"></img>');
  let coinHeight = Math.random() * 120 + 50;
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
    setLevel();
    $("#score").text(score);
    playCoinSound();
  }
}

function playCoinSound() {
  let sound = new Audio("assets/coin-257878.mp3");
  !audioMuted && sound.play();
}
function generateAndCheckCollisionWithCoin() {
  let randomTime = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

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
