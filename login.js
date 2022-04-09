$(document).ready(function(){
    $(".login").hide();
    $(".join_li").addClass("active");

    $(".login_li").click(function(){
      $(this).addClass("active");
      $(".join_li").removeClass("active");
      $(".login").show();
       $(".join").hide();
    })

    $(".join_li").click(function(){
      $(this).addClass("active");
      $(".login_li").removeClass("active");
      $(".join").show();
       $(".login").hide();
    })
});