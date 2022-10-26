(function () {
  const slides = [
    '<div class="slide"><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div class="slide"><img src="img/banana.svg" alt="Banana"></div>',
    '<div class="slide"><img src="img/girl.svg" alt="Girl"></div>',
    '<div class="slide"><img src="img/viking.svg" alt="Viking"></div>',
  ];
  let currentSlideIdx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector('.products-carousel__slide-container');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 600) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 900) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
  }
  function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide(); 
  }
  function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide(); 
  }
  setInterval(nextSlide, 3000);
  renderSlide();
  const nextBtn = document.querySelector('.products-carousel__next');
  nextBtn.addEventListener('click', nextSlide);
  const prevBtn = document.querySelector('.products-carousel__prev');
  prevBtn.addEventListener('click', prevSlide);

  window.addEventListener('resize', renderSlide);
})();
