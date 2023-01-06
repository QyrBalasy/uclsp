function entryBlock(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

export function onEntry() {
  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(entryBlock, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }
}
