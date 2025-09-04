document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".btn-menu");
  const mMenu = document.querySelector(".m-menu");

  const btnClose = document.querySelector(".btn-close");

  btnMenu.addEventListener("click", function () {
    mMenu.classList.toggle("active");
  });

  btnClose.addEventListener("click", function () {
    mMenu.classList.remove("active");
  });
});
