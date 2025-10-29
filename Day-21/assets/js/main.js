$(window).on("scroll", function () {
  let navbar = $("#navbar");
  if ($(this).scrollTop() > 40) {
    navbar.addClass("scrolled fixed-top");
  } else {
    navbar.removeClass("scrolled fixed-top");
  }
});
