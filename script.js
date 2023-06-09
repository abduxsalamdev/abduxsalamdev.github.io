// ================toggle icon navbar ============//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ================scroll sections active links ============//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    // ================sticky navbar ============//

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    // ================ remove toggle icon navbar ============//

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ================ scroll reveal ============//

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .slider-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// ================ Typed js ============//
const typed = new Typed('.multiple-text', {
    strings: ['Frontend developer', 'Wordpress expert', 'eCommerce Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ----send email for contact form----//

function sendMail() {
    var promps = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_nxwz9wc";
    const templateID = "template_9m3yiuf";

    emailjs
    .send(serviceID,templateID,promps)
    .then((res) => {
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message send successfully");
    })
    .catch((err) => console.log(err));
}

// ---- Testimonial Slider javascript-----//
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
  769: {
    slidesPerView: 3,
  },

  520: {
    slidesPerView: 2,
  },
},
    
  });


