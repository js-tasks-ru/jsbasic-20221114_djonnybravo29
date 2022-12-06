function initCarousel() {
  const carousel = document.querySelector('.carousel__inner');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left')
  const totalSlides = document.querySelectorAll('.carousel__slide').length;
  const slideWidth = carousel.offsetWidth;
  let counter = 1;
  let totalWidth = 0;

  leftArrow.style.display = 'none';

  const switchRight = () => {

    if (counter === totalSlides - 1) {
        rightArrow.style.display = 'none';
      }
      counter++;
      totalWidth += slideWidth;
      carousel.style.transform = `translateX(${-totalWidth}px)`;
      leftArrow.style.display = '';

  }
  const switchLeft = () => {
      if (counter === 2) {
        leftArrow.style.display = 'none';
      }
      counter--
      totalWidth -= slideWidth;
      carousel.style.transform = `translateX(${-totalWidth}px)`;
      rightArrow.style.display = '';

  }

  rightArrow.addEventListener('click', switchRight)
  leftArrow.addEventListener('click', switchLeft)

}
