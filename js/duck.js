let isJumping = false;

function playQuack() {
  $("#quacking-sound")[0].play();
}

function jump() {
  if (!isJumping) {
    isJumping = true;

    playQuack();
    $("#duck").attr("src", "assets/duck_jump.png");
    $("#duck").animate({ bottom: "150px" }, 400, function () {
      $("#duck").animate({ bottom: "10px" }, 300, function () {
        $("#duck").attr("src", "assets/duck_1.png");
        isJumping = false;
      });
    });
  }
}

function initialDuck() {
  $("#duck").css({
    width: "50px",
    height: "50px",
    position: "absolute",
    bottom: "10px",
    left: "50px",
  });
  $("#duck").attr("src", "assets/duck_1.png");
  isJumping = false;
}

$(document).ready(() => {
  $(document).keydown(function (event) {
    if ((isPlaying && event.key === " ") || event.key === "ArrowUp") {
      jump();
    }
  });
});
