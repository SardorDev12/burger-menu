const burgerIcon = document.querySelector(".burger-icon");
const navbar = document.querySelector(".navbar");
burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("overlay");
  navbar.classList.toggle("navbar-active");
});
