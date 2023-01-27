import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export function MySwiper() {
  const swiper = new Swiper(".reviewSwiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: "horizontal",
    loop: false,

    slidesPerView: 3,
    mousewheel: true,
    keyboard: true,
    // roundLengths: true,
    // watchOverflow: true,
    // centeredSlides: true,

    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    simulateTouch: false,
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
    },
  });
}
