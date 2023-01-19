import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// export function swiper() {
//   const swiper = new Swiper(".swiper", {
//     modules: [Navigation, Pagination],
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });
// }

export function MySwiper() {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
