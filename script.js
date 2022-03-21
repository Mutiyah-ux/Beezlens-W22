$(window).on("load", start);

function start() {
  $("ul.nav a:first").click();
  $("#carousel").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  ScrollReveal().reveal('.reveal1');
  ScrollReveal().reveal('.reveal2', {
    delay: 1000
  });
  ScrollReveal().reveal('.reveal3', {
    delay: 1000
  });
}

$(document).on("click", "ul.nav a", nav);

function nav(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $("#content").load(href);
  $("ul.nav a").removeClass("active");
  $(this).addClass("active");
}