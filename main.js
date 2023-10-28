let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let navLinks = document.querySelector(".nav-links");

let menuCloseBtn = document.querySelector(".nav-links .bx-x");

let menuOpenBtn = document.querySelector(".navbar .hamburger");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
let htmlcssArrow = document.querySelector(".htmlcss-arrow")
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let hamburger = document.querySelector(".hamburger");
function mobileMenu() {
   hamburger.classList.toggle("active");
}

function closeMenu() {
   hamburger.classList.remove("active");
}

const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('light');
  themeSwitcher.classList.toggle('on');
});
