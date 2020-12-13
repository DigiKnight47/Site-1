$("a.home").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.gents").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.ladies").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.home-textile").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.about").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("a.contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

$("div.bottom").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$("a.copyright-line").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

if ($(window).width() > 992) {
  $(window).scroll(function(){
     if ($(this).scrollTop() > 465) {
        $('#navbar_top').addClass("fixed-top");
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
        $('body').css('padding-top', '0');
      }
  });
}

//search bar animation script
var clickCount = 0;

document.getElementById("search_btn").addEventListener("click", function() {
  document.getElementsByClassName("bar")[0].style.display = "block";
  document.getElementsByClassName("main")[0].classList.add("change");
  document.getElementsByTagName("body")[0].classList.add("disable-scroll");
  clickCount = 0;
  document.getElementsByClassName("main")[0].addEventListener("click", fun);
});


function fun() {
  clickCount++;
  if (clickCount==2) {
    document.getElementsByClassName("bar")[0].style.display = "none";
    document.getElementsByClassName("main")[0].classList.remove("change");
    document.getElementsByTagName("body")[0].classList.remove("disable-scroll");
    document.getElementsByClassName("bar")[0].reset();
  }
}
