let isJumping = false;

function playQuack() {
  $("#quacking-sound")[0].play();
}

function jump() {
  if (!isJumping) {
    isJumping = true;

    playQuack();
    $("#duck").animate({ bottom: "150px" }, 400, function () {
      $("#duck").animate({ bottom: "10px" }, 300, function () {
        isJumping = false;
      });
    });
  }
}

$(document).ready(() => {
  $(document).keydown(function (event) {
    if (event.key === " " || event.key === "ArrowUp") {
      jump();
    }
  });
});
