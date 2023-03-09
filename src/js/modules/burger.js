// const burgerMenu = document.getElementById("burger-menu");
// const menuBody = document.getElementById("menu");
// export function burgerMenuCustom() {
//   if (burgerMenu) {
//     burgerMenu.addEventListener("click", function (e) {
//       document.body.classList.toggle("lock");
//       burgerMenu.classList.toggle("active");
//       menuBody.classList.toggle("overlay");
//     });
//   }
// }

// export function smoothScroll() {
//   const menuLinks = document.querySelectorAll(
//     ".headerMain-menu__link[data-goto]"
//   );
//   if (menuLinks.length > 0) {
//     menuLinks.forEach((menuLink) => {
//       menuLink.addEventListener("click", onMenuLinkClick);
//     });
//   }
// }

// function onMenuLinkClick(e) {
//   const menuLink = e.target;
//   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//     const gotoSection = document.querySelector(menuLink.dataset.goto);
//     let yOffset = window.pageYOffset;
//     const gotoSectionValue = gotoSection.getBoundingClientRect().top + yOffset;

//     if (burgerMenu.classList.contains("active")) {
//       document.body.classList.remove("lock");
//       burgerMenu.classList.remove("active");
//       menuBody.classList.remove("overlay");
//     }

//     window.scrollTo({
//       top: gotoSectionValue,
//       behavior: "smooth",
//     });
//     e.preventDefault();
//   }
// }

const iconMenu = document.querySelector(".menu__burger");
const menuBody = document.querySelector(".menu__body");
let menuArrows = document.querySelectorAll(".menu__arrow");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

export function burgerMenuCustom() {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  if (isMobile.any()) {
    document.body.classList.add("_touch");
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
          menuArrow.parentElement.classList.toggle("_active");
        });
      }
    }
  } else {
    document.body.classList.add("_pc");
  }
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
  }

  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    });
  }
}

function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    let yOffset = window.pageYOffset;
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      yOffset -
      document.querySelector("header").offsetHeight;
    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
