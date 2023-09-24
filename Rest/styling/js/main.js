const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
