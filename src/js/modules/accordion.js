export function showContent() {
  const accordion = document.getElementsByClassName(
    "section-services__item-accordion"
  );
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.previousElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
