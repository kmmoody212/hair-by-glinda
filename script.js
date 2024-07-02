//function myFunction() {
//const x = document.getElementById("myTopnav");
//if (x.className === "topnav") {
//x.className += "responsive";
//} else {
//x.className = "topnav";
//}
//}

function myFunction() {
  const menuBtn = document.querySelector(".mobile-menu");
  const mobileMenu = document.querySelector(".mobile-nav");
  const navBar = document.querySelector(".topnav");
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  navBar.classList.toggle("is-active");
}

//const hamMenu = document.querySelector(".ham-menu");
//const offScreenMenu = document.querySelector(".off-screen-menu");

// hamMenu.addEventListener("click", () => {
//  hamMenu.classList.toggle("active");
// offScreenMenu.classList.toggle("active");
//});
