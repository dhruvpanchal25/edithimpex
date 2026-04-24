// NAVBAR
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.onclick = () => navLinks.classList.toggle("active");

// NAVBAR SCROLL
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let current = window.pageYOffset;

  if(current > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  if(current > lastScroll && current > 100)
    navbar.classList.add("hide");
  else
    navbar.classList.remove("hide");

  lastScroll = current;
});

// SCROLL ANIMATION
const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  serviceCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    }
  });
});

// SPECIAL SECTION ANIMATION
const specialCards = document.querySelectorAll(".special-card");

window.addEventListener("scroll", () => {
  specialCards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "0.6s ease";
    }
  });
});