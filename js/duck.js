$(document).ready(() => {
  let isJumping = false;
  $(document).keydown(function (event) {
    if (event.key === " " && !isJumping) {
      isJumping = true;
      $("#duck").animate({ bottom: "150px" }, 400, function () {
        $("#duck").animate({ bottom: "10px" }, 300, function () {
          isJumping = false;
        });
      });
    }
  });
});
