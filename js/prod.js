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

//product card
const cards = document.querySelectorAll(".inventory-card");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.15});

cards.forEach(card=>observer.observe(card));


const ctaBox = document.querySelector(".cta-box");

const ctaObserver = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.transform = "translateY(0)";
entry.target.style.opacity = "1";
}
});
},{threshold:0.2});

ctaBox.style.transform = "translateY(50px)";
ctaBox.style.opacity = "0";
ctaBox.style.transition = "1s ease";

ctaObserver.observe(ctaBox);