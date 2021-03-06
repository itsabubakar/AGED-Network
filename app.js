// Navbar
const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

// New Navbar

const open = document.querySelector('.open');
const close = document.querySelector('.close');

open.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
        open.classList.add('hidden')
        close.classList.add('show');
})

close.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
        open.classList.remove('hidden')
        close.classList.remove('show');
})


// hover effect

const hoverNav = document.querySelectorAll('.nav-list-item');

hoverNav.forEach(hover => {
    hover.addEventListener('mouseenter', ()=> {
        const visibleNav = hover.childNodes[2];
        visibleNav.classList.add('nav-list-item-visible')
    })

    hover.addEventListener('mouseleave', ()=> {
        const visibleNav = hover.childNodes[2];
        visibleNav.classList.remove('nav-list-item-visible')
    })
})

// End of nav hover effect


// show navbar on scroll up

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }


    lastScroll = currentScroll;
})