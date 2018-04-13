const burger = document.querySelector(".burger");
const close = document.querySelector(".closeMenu");
const nav = document.querySelector(".js-element-listMobile");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-active");
});
close.addEventListener("click", () => {
  nav.classList.remove("is-active");
});
