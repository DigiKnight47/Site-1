//jshint esversion:6

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

//store menu script
