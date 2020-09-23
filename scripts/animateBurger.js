var atTop = true
var open = false

new fullpage('#fullpage', {
anchors: ['home-anchor', 'about-anchor', 'projects-anchor', 'contact-anchor']
});

//methods
fullpage_api.setAllowScrolling(true);


function animateBurger() {
  burger = document.getElementById("burger");
  burger.classList.toggle("open");
  if (atTop) {
    document.getElementById("navbar").style = "background-color: #ffffff !important";
    document.getElementById("navbar").style.boxShadow = "0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("navbar").classList.remove("navbar-dark");
    document.getElementById("navbar").classList.add("navbar-light");
    document.getElementById("line-one").style.backgroundColor = "black";
    document.getElementById("line-two").style.backgroundColor = "black";
    document.getElementById("line-three").style.backgroundColor = "black";
    open = !open
  }
}
