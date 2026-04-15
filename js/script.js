let lastScroll = 0;
const navbar = document.querySelector(".navbar");
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

/* 🔥 MOBILE MENU */
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* 🔥 SCROLL EFFECT */
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  // Add background on scroll
  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Hide / Show navbar
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.classList.add("hide"); // scroll down
  } else {
    navbar.classList.remove("hide"); // scroll up
  }

  lastScroll = currentScroll;
});



// =========== counter ==========
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = target / 100;

  const update = () => {
    count += speed;
    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

/* TRIGGER WHEN VISIBLE */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".counter");
      counters.forEach(counter => runCounter(counter));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".global"));

// ===== SCROLL ANIMATION =====
const animatedElements = document.querySelectorAll(".fade-up, .fade-left");

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => {
  animationObserver.observe(el);
});

// ============ email js ============
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message Sent ✅");
    }, (error) => {
      alert("Error ❌ " + error.text);
    });
});
