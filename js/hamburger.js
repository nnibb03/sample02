$("#hamburger-menu").on("click", function(){
    $(".sp-nav").fadeToggle("slow", "linear");
    $(this).toggleClass("close");
});

$(".sp-nav ul li a").on("click", function() {
    $(".sp-nav").fadeToggle("slow", "linear");
    $("#hamburger-menu").removeClass("active");
});

$('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  
  $(".info-list").on("click", function() {
　　　$(this).next().slideToggle(200);
　});
