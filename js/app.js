/*----------Building the navbar list items---------*/

const generateListItem = (buttonClass, text, activeClass, linkClass) => {
  const navList = document.querySelector(".nav-list");
  const listItem = document.createElement("li");
  listItem.classList.add("nav-li", buttonClass);
  const navLink = document.createElement("a");
  navLink.classList.add("nav-link", activeClass, linkClass);
  const link = document.createTextNode(text);
  navLink.appendChild(link);
  navLink.href = "#";
  listItem.appendChild(navLink);
  navList.appendChild(listItem);
};

generateListItem("home-button", "Home", "active", "home-link");
generateListItem("houses-button", "Houses", "oh", "houses-link");
generateListItem("about-button", "About", "oh", "about-link");
generateListItem("footer-button", "Contact Us", "oh", "footer-link");






/*-----------On scroll activate the active class for the target list item-----*/

const onscrollPutClass = (target, link) => {
  let distanceFormTheTop = window.scrollY;
  let section = document.querySelector(target);
  if (
    section.offsetTop + section.offsetHeight > distanceFormTheTop &&
    section.offsetTop <= distanceFormTheTop
  ) {
    link.classList.add("your-active-class");
  } else {
    link.classList.remove("your-active-class");
  }
};

window.addEventListener("scroll", () => {
  onscrollPutClass("#slider", housesLink);
  onscrollPutClass("#home", homeLink);
  onscrollPutClass("#aboat", aboutLink);
  onscrollPutClass("#footer", footerLink);
});

/*--------------Declaring variables----------------*/

const homeLink = document.querySelector(".home-link");
const housesLink = document.querySelector(".houses-link");
const footerLink = document.querySelector(".footer-link");
const aboutLink = document.querySelector(".about-link");
const afterButton = document.querySelector(".after");
const beforeButton = document.querySelector(".before");
const houses = document.querySelectorAll(".slide");
const homeButton = document.querySelector(".home-button");
const housesButton = document.querySelector(".houses-button");
const aboutButton = document.querySelector(".about-button");
const footerButton = document.querySelector(".footer-button");

/*-----------On click activate the active class for the clicked li--------*/

/*---about link---*/

aboutLink.addEventListener("click", ()=> {
  const previousActiveButton = document.getElementsByClassName("active");
   previousActiveButton[0].classList.remove("active");
  aboutLink.classList.add("active");
})

/*---houses link---*/

housesLink.addEventListener("click", ()=> {
  const previousActiveButton = document.getElementsByClassName("active");
  previousActiveButton[0].classList.remove("active");
  housesLink.classList.add("active");
})

/*---home link---*/

homeLink.addEventListener("click", ()=> {
  const previousActiveButton = document.getElementsByClassName("active");
  previousActiveButton[0].classList.remove("active");
  homeLink.classList.add("active");
})

/*---contact us link---*/

footerLink.addEventListener("click", ()=> {
  const previousActiveButton = document.getElementsByClassName("active");
  previousActiveButton[0].classList.remove("active");
  footerLink.classList.add("active");
})

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

/* ------slideshow  events--------- */

afterButton.addEventListener("click", nextHouse);

beforeButton.addEventListener("click", previousHouse);

/*--------------------smooth scrolling animation--------------------*/

const smoothScroll = (target, duration) => {
  let startingTime = null;
  let targetx = document.querySelector(target);
  let startingPosition = window.pageYOffset;
  let targetPosition = targetx.getBoundingClientRect().top;
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

/*--------smooth scrolling events------- */

housesButton.addEventListener("click", function () {
  smoothScroll("#slider", 2000);
});

homeButton.addEventListener("click", function () {
  smoothScroll("#home", 4000);
});

footerButton.addEventListener("click", function () {
  smoothScroll("#footer", 4000);
});
aboutButton.addEventListener("click", function () {
  smoothScroll("#aboat", 4000);
});

/*-------------------------------------------------------------------------------------------------------*/
