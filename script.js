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


$("#menu_home").click(openHome);

function openHome() {
  $("#menu a").removeClass("active");
  $(this).addClass("active");
  $("#content_home").siblings().hide();
  $("#content_home").show();
}

$("#menu_about").click(openAbout);

function openAbout() {
  $(this).addClass("active");
  $("#content_about").siblings().hide();
  $("#content_about").show();
}

$("#menu_join").click(openJoin);

function openJoin() {
  $(this).addClass("active");
  $("#content_join").siblings().hide();
  $("#content_join").show();
}

$("#menu_Login").click(openLogin);

function openLogin() {
  $(this).addClass("active");
  $("#content_login").siblings().hide();
  $("#content_login").show();
}

$("#menu_home").click();