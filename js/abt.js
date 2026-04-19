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


// 🔥 SCROLL ANIMATION (NEW)
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

fadeElements.forEach(el => observer.observe(el));


// 🔥 COUNTER
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounter(){
  if(counterStarted) return;
  counterStarted = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if(count < target){
        count += increment;
        counter.innerText = Math.floor(count);
        setTimeout(update, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    update();
  });
}

// trigger counter
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const top = aboutSection.getBoundingClientRect().top;
  if(top < window.innerHeight - 100){
    runCounter();
  }
});