if (window.jQuery) {
(function ($) {
    "use strict";

    // RTL/LTR toggle
    var applyDirection = function (direction) {
        var safeDirection = direction === 'ltr' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', safeDirection);
        $('[data-direction-toggle]').text(safeDirection.toUpperCase());
    };

    applyDirection(localStorage.getItem('siteDirection') || document.documentElement.getAttribute('dir') || 'rtl');

    $('[data-direction-toggle]').on('click', function () {
        var nextDirection = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
        localStorage.setItem('siteDirection', nextDirection);
        applyDirection(nextDirection);
    });

    // Dark/light theme toggle
    var applyTheme = function (theme) {
        var safeTheme = theme === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', safeTheme);
        document.body.classList.toggle('light-mode', safeTheme === 'light');
        document.body.classList.toggle('dark-mode', safeTheme === 'dark');

        var themeText = safeTheme === 'dark' ? 'Dark' : 'Light';
        var themeIcon = safeTheme === 'dark' ? 'fa-moon' : 'fa-sun';
        $('[data-theme-toggle] span').text(themeText);
        $('[data-theme-toggle] i').removeClass('fa-sun fa-moon').addClass(themeIcon);
    };

    applyTheme(localStorage.getItem('siteTheme') || 'dark');

    $('[data-theme-toggle]').on('click', function () {
        var nextTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        localStorage.setItem('siteTheme', nextTheme);
        applyTheme(nextTheme);
    });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    if ($.fn.counterUp) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }


    // Skills
    if ($.fn.waypoint) {
        $('.skill').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }


    // Project carousel
    if ($.fn.owlCarousel) {
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    }


    // Testimonials carousel
    if ($.fn.owlCarousel) {
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    }

    
})(jQuery);
} else {
    const spinner = document.getElementById("spinner");
    if (spinner) {
        spinner.classList.remove("show");
    }
}


function activateWhenVisible(elements, offset = 100) {
    elements.forEach((element) => {
        if (!element) return;

        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - offset) {
            element.classList.add("active");
        }
    });
}

function bindReveal(selector, childSelector) {
    const section = document.querySelector(selector);
    if (!section) return;

    const revealItems = () => {
        const targets = childSelector ? section.querySelectorAll(childSelector) : [section];
        activateWhenVisible(targets);
    };

    window.addEventListener("scroll", revealItems);
    window.addEventListener("load", revealItems);
    revealItems();
}

bindReveal(".muscle-advanced", ".card");
bindReveal(".muscle-benefits", ".flip-card");
bindReveal(".muscle-routine", ".step");
bindReveal(".muscle-trainers", ".trainer");
bindReveal(".muscle-content", ".content-box");
bindReveal(".why-different", ".why-box");
bindReveal(".about-pro");
bindReveal(".reveal-section");
bindReveal(".reveal-tabs");
bindReveal(".gym-testimonial");

const revealAll = () => {
    activateWhenVisible(document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .gallery-item"));
    activateWhenVisible(document.querySelectorAll(".facts-strip .fact"));
};

window.addEventListener("scroll", revealAll);
window.addEventListener("load", revealAll);
revealAll();

document.querySelectorAll(".count, .counter").forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;

    let update = () => {
        let increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
});

if (window.jQuery && $.fn.owlCarousel && $('.service-carousel').length) {
    $('.service-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,

        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ],

        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
}



function calculateCalories() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let activity = document.getElementById("activity").value;

    if (!weight || !height || !age || !activity) {
        alert("Please fill all fields");
        return;
    }

    // Simple BMR formula
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let calories = Math.round(bmr * activity);

    document.getElementById("result").innerText = calories;
}


let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

if (slides.length) {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (nextButton) {
        nextButton.onclick = () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        };
    }

    if (prevButton) {
        prevButton.onclick = () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        };
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
}


window.onload = function () {
    const cards = document.querySelectorAll('.class-card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 200); // delay animation
    });
};

window.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector('.beginner-blast .text');
    const image = document.querySelector('.beginner-blast .image');
    if (!text || !image) return;

    function showSection() {
        const trigger = window.innerHeight * 0.85;
        const top = text.getBoundingClientRect().top;

        if (top < trigger) {
            text.classList.add('show');
            image.classList.add('show');
        }
    }

    window.addEventListener('scroll', showSection);
    showSection();
});

const btn = document.getElementById("rtlToggle");

if (btn) {
    btn.onclick = function () {
        document.body.classList.toggle("rtl");
    };
}

if (!window.bootstrap) {
    document.querySelectorAll('.navbar [data-bs-toggle="dropdown"]').forEach((toggle) => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const item = toggle.closest(".dropdown");
            const menu = item ? item.querySelector(".dropdown-menu") : null;
            if (!item || !menu) return;

            item.classList.toggle("show");
            menu.classList.toggle("show");
        });
    });
}
