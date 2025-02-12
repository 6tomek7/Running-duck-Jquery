let isJumping = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
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
