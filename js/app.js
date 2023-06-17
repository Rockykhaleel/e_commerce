// $("#header").load("/header.html");
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
