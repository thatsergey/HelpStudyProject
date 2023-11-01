const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween:16,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
