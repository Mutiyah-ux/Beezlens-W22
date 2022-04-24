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


$("#menu_home").click();

start();

function collect() {

  var obj = {};

  $("input[name]").each(function() {
    var text = $(this).val();
    var name = $(this).attr("name");
    obj[name] = text;
  })

  var data = JSON.stringify(obj);
  $("#json").val(data);

}