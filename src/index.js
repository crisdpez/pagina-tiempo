/* eslint-disable */




const swiper = new Swiper(".carrusel", {
  loop: true,

  spaceBetween: 30,

  // If we need pagination
  pagination: { el: ".swiper-pagination", },


  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

});



//  Animación de stroke
const stroke = document.querySelectorAll('.stroke');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('relleno');
        }
      });
    }, { threshold: 0.5 }); // Cuando el 50% de la línea aparece

    stroke.forEach(stroke => {
      observer.observe(stroke);
    });