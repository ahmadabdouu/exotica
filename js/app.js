const afterButton = document.querySelector(".after");
const beforeButton = document.querySelector(".before");
const houses = document.querySelectorAll(".slide");
const homeButton = document.querySelector(".home-button");
const housesButton = document.querySelector(".houses-button");
const footerButton = document.querySelector(".footer-button");

/*--------------------Houses images functions-------------------- */

const nextHouse = () => {
  const showSlide = document.querySelector(".show");

  showSlide.classList.remove("show");

  if (
    showSlide.nextElementSibling &&
    showSlide.nextElementSibling.className !== "buttons"
  ) {
    showSlide.nextElementSibling.classList.add("show");
  } else {
    houses[0].classList.add("show");
  }
  showSlide.classList.remove("show");
};

const previousHouse = () => {
  const showSlide = document.querySelector(".show");

  showSlide.classList.remove("show");

  if (showSlide.previousElementSibling) {
    showSlide.previousElementSibling.classList.add("show");
  } else {
    houses[houses.length - 1].classList.add("show");
  }
  showSlide.classList.remove("show");
};

/* ------ events--------- */

afterButton.addEventListener("click", nextHouse);

beforeButton.addEventListener("click", previousHouse);

/*--------------------smooth scrolling animation--------------------*/

const smoothScroll = (target, duration) => {
  let startingTime = null;
  var target = document.querySelector(target);
  let startingPosition = window.pageYOffset;
  let targetPosition = target.getBoundingClientRect().top;
  let distanceNeeded = targetPosition - startingPosition;

  const animationScroll = (currentTime) => {
    if (startingTime === null) startingTime = currentTime;
    let timeTaken = currentTime - startingTime;
    let play = ease(timeTaken, startingPosition, distanceNeeded, duration);
    window.scrollTo(0, play);
    if (timeTaken < duration) requestAnimationFrame(animationScroll);
  };

  const ease = (t, b, c, d) => {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  };

  requestAnimationFrame(animationScroll);
};

/*--------events------- */

housesButton.addEventListener("click", function () {
  smoothScroll("#slider", 2000);
});

homeButton.addEventListener("click", function () {
  smoothScroll("#home", 4000);
});

footerButton.addEventListener("click", function () {
  smoothScroll("#footer", 4000);
});
