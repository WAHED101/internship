$(window).on("scroll", function () {
  let navbar = $("#navbar");
  let navbtn = $("#nav-book");
  if ($(this).scrollTop() > 40) {
    if (!navbar.hasClass("scrolled")) {
      // remove first
      navbar.removeClass("scrolled");

      // trigger (animation restart)
      void navbar[0].offsetWidth;

      // add again animation
      navbar.addClass("scrolled fixed-top");
      navbtn.addClass("scrolled-btn");
    }
  } else {
    navbar.removeClass("scrolled fixed-top");
    navbtn.removeClass("scrolled-btn");
  }
});



