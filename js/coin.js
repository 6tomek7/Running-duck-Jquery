$(document).ready(() => {
  function createCoin() {
    let coin = $('<img id="coin" src="assets/coin.png"></img>');
    let coinHeight = Math.random() * 100 + 50;
    $("#game-container").append(coin);
    coin.css({ right: "-50px", bottom: coinHeight + "px" });

    coin.animate({ right: "100vw" }, 3000, "linear", function () {
      $(this).remove();
    });
  }

  setInterval(createCoin, 1000);
});
