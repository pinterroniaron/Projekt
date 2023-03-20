// Add animation to the navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
});

// Add animations to the featured products section
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animate__animated', 'animate__pulse');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animate__animated', 'animate__pulse');
    });
});

// Add a cart functionality
const btns = document.querySelectorAll('.btn');
const cartCount = document.querySelector('.cart-count');
let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerHTML = count;
    });
});

function darkmode() {
        var element = document.body;
        element.classList.toggle("darkmode");

        if (!element.classList.contains("darkmode")) {
          document.querySelector("#darkmode").innerText = "Világos téma";
        } else {
          document.querySelector("#darkmode").innerText = "Sötét téma";
        }
      }