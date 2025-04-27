document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

    function showNextSlide() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');
    setInterval(showNextSlide, 7000);
});
