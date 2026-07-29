/* ==========================================
   SIDHARTH KAMBLE PORTFOLIO
   script.js
========================================== */

// ==========================
// Sticky Navbar Shadow
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinksMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinksMenu.classList.toggle("active");

    if (menuToggle.innerHTML.includes("bars")) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(
".about-card,.skill-card,.project-card,.education-card,.contact-card"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('.nav-links a').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        navLinksMenu.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

// ==========================
// Hero Counter Animation
// ==========================

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if(counterStarted) return;

    const hero = document.querySelector(".hero");

    if(window.scrollY < hero.offsetHeight){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            const suffix = counter.dataset.suffix !== undefined ? counter.dataset.suffix : "+";

            let count = 0;

            const speed = 40;

            const update = ()=>{

                if(count < target){

                    count++;

                    counter.innerText = count + suffix;

                    setTimeout(update,speed);

                }
                else{

                    counter.innerText = target + suffix;

                }

            }

            update();

        });

    }

});

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// Console Message
// ==========================

console.log("Welcome to Sidharth Kamble's Portfolio 🚀");