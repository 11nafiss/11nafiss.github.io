const menuToggle = document.querySelector(".menu-toggle input");
const ul = document.querySelector(".ul-res");

menuToggle.addEventListener("click", function () {
  ul.classList.toggle("slide");
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  stagePadding: 300,
  autoplay: true,
  autoWidth: true,
  autoHeight: true,
  margin: 10,
  nav: true,
  navText: ["<img src='./assets/img/Left button.svg'/>", "<img src='./assets/img/Right button.svg'/>"],
  dots: false,
  responsive: {
    600: {
      items: 2,
    },
  },
});
