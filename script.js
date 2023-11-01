const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween:16,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });