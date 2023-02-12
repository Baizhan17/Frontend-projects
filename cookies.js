// const cookieBox = document.cookie;
// cookieBox = "Our website use cookies";
// alert(cookieBox);
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#accept-cookies")
    .addEventListener("click", function () {
      document.querySelector(".cookie-alert").style.display = "none";
    });
});
