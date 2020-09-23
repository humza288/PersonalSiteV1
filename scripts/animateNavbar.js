// code for animating the navbar

var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var collapse = document.getElementById("collapsibleNavbar");


// if we click on element hide the nav bar

function removeTop(navbar, collapse) {
  if (screen && screen.width < 991) {
    animateBurger()
    setTimeout(function(){

      var navbar = document.getElementById("navbar");
      var collapse = document.getElementById("collapsibleNavbar");
      collapse.classList.remove("show");
      navbar.style.top = "-100";

    }, 1000)
  }
}

window.onscroll = function() {

  var collapse = document.getElementById("collapsibleNavbar");
  var currentScrollPos = window.pageYOffset;

  if (open) {
    animateBurger();
  }

  // change the color of the navbar higher up the page

  if (currentScrollPos > 100) { 
    atTop = false;
    document.getElementById("navbar").style = "background-color: #ffffff !important";
    document.getElementById("navbar").style.boxShadow = "0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("navbar").classList.remove("navbar-dark");
    document.getElementById("navbar").classList.add("navbar-light");
    document.getElementById("line-one").style.backgroundColor = "black"
    document.getElementById("line-two").style.backgroundColor = "black"
    document.getElementById("line-three").style.backgroundColor = "black"

  }

  // change the color of the navbar further down the page

  if (currentScrollPos < 100 && currentScrollPos > -10) { 
    atTop = true;
    document.getElementById("navbar").style = "background-color: rgba(255, 255, 255, 0) !important";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("navbar").classList.remove("navbar-light");
    document.getElementById("navbar").classList.add("navbar-dark");
    document.getElementById("line-one").style.backgroundColor = "white"
    document.getElementById("line-two").style.backgroundColor = "white"
    document.getElementById("line-three").style.backgroundColor = "white"
  }

  if (screen && screen.width < 991) {
    if (currentScrollPos > 500) {
      collapse.classList.remove("show");
      if (prevScrollpos > currentScrollPos ) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100";
        }
    }
  
    prevScrollpos = currentScrollPos;
  }
}