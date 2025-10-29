const player = new Plyr("#player");

// Pause video when modal is closed
const videoModal = document.getElementById("videoModal");
videoModal.addEventListener("hidden.bs.modal", () => {
  player.pause();
});

// Optional: Autoplay when modal opens
videoModal.addEventListener("shown.bs.modal", () => {
  player.play();
});

$(window).on("load", function () {
  let i = 0;
  const cool = setInterval(() => {
    $("#display").text(i);
    i++;
    if (i > 1200) {
      clearInterval(cool);
    }
  }, 1);

  let q = 0;
  const cool1 = setInterval(() => {
    $("#display1").text(q);
    q++;
    if (q > 750) {
      clearInterval(cool1);
    }
  }, 6);

  let w = 0;
  const cool2 = setInterval(() => {
    $("#display2").text(w);
    w++;
    if (w > 25) {
      clearInterval(cool2);
    }
  }, 200);

  let e = 0;
  const cool3 = setInterval(() => {
    $("#display3").text(e);
    e++;
    if (e > 1200) {
      clearInterval(cool3);
    }
  }, 1);
});
