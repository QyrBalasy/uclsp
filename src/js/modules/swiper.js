import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MySwiper() {
  const swiper = new Swiper(".reviewSwiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // when window width is >= 480px
      410: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      // when window width is >= 640px
      750: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
      },
    },
  });
}
