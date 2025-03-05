let icons = document.querySelectorAll(".small_icons");
let imgs = document.querySelectorAll(".task_portal_img");
const options = {
  root: null,
  threshold: 0.3,
};

document.addEventListener("DOMContentLoaded", () => {
  const animateCallBack = (enteries, observer) => {
    enteries.forEach((instance) => {
      instance.isIntersecting
        ? instance.target.classList.add("animate-on")
        : instance.target.classList.remove("animate-on");
    });
  };
  const observer = new IntersectionObserver(animateCallBack, options);

  if (imgs) {
    imgs.forEach((img) => {
      observer.observe(img);
    });
  }

  icons.forEach((icon) => {
    observer.observe(icon);
  });
});
