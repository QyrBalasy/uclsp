const burgerMenu = document.getElementById("burger-menu");
const menuBody = document.getElementById("menu");
export function burgerMenuCustom() {
  if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      burgerMenu.classList.toggle("active");
      menuBody.classList.toggle("overlay");
    });
  }
}

export function smoothScroll() {
  const menuLinks = document.querySelectorAll(
    ".menu__list-item__link[data-goto]"
  );
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });
  }
}

function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoSection = document.querySelector(menuLink.dataset.goto);
    let yOffset = window.pageYOffset;
    const gotoSectionValue = gotoSection.getBoundingClientRect().top + yOffset;

    if (burgerMenu.classList.contains("active")) {
      document.body.classList.remove("lock");
      burgerMenu.classList.remove("active");
      menuBody.classList.remove("overlay");
    }

    window.scrollTo({
      top: gotoSectionValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
