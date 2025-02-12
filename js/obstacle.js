$(document).ready(function () {
  function createObstacle() {
    let obstacle = $('<img id="obstacle" src="assets/cactus.png"></img>');
    $("#game-container").append(obstacle);
    obstacle.css("right", "-50px");

    obstacle.animate({ right: "100vw" }, 3000, "linear", function () {
      $(this).remove();
    });
  }

  setInterval(createObstacle, 1000);
});
