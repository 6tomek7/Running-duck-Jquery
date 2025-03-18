let cloudInterval;
function createCloud() {
  let cloud = chooseRandomCloud();
  $("#game-container").append(cloud);

  cloud.animate({ right: "100vw" }, 36000, "linear", function () {
    cloud.remove();
  });
  return cloud;
}

function initialClouds() {
  [-15, 25, 65].forEach((position) => {
    let cloud = chooseRandomCloud();
    $("#game-container").append(cloud);
    cloud.css({ right: position + "%" });

    let distance = $(window).width() - (position / 100) * $(window).width();
    let speed = (distance / $(window).width()) * 36000;

    cloud.animate({ right: "100vw" }, speed, "linear", function () {
      cloud.remove();
    });
  });

  cloudInterval = setInterval(() => {
    createCloud();
  }, 12000);
}

function chooseRandomCloud() {
  const clouds = [
    $('<img class="cloud" src="assets/clouds_1.png">'),
    $('<img class="cloud" src="assets/clouds_2.png">'),
    $('<img class="cloud" src="assets/clouds_3.png">'),
  ];

  const index = Math.floor(Math.random() * 3);
  return clouds[index];
}

function stopGenerateCloud() {
  clearInterval(cloudInterval);
}
