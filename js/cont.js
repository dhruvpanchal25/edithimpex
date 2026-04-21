/* 🔥 MOBILE MENU */
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// INIT EMAILJS
(function(){
    emailjs.init("Gez_nJmnflXO6JqAE"); // 🔁 replace
})();

const form = document.getElementById("contact-form");
const btn = document.getElementById("submitBtn");

// auto date
document.getElementById("dateField").value = new Date().toLocaleString();

form.addEventListener("submit", function(e){
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_nukn6ed", "template_96fgzmd", form)
    .then(() => {
        btn.innerText = "Sent ✅";
        form.reset();
    })
    .catch((error) => {
        btn.innerText = "Failed ❌";
        console.log(error);
    })
    .finally(() => {
        setTimeout(() => {
            btn.innerText = "Submit Inquiry";
            btn.disabled = false;
        }, 2000);
    });
});