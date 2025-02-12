function muteSwitch() {
  $("#speakerIcon").click(function () {
    let img = $("#speakerIcon");
    let audio = $("audio");

    if (audio.prop("muted")) {
      audio.prop("muted", false);
      img.attr("src", "assets/unmute.png");
    } else {
      audio.prop("muted", true);
      img.attr("src", "assets/mute.png");
    }
  });
}

$(document).ready(function () {
  muteSwitch();
});
