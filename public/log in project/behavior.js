document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.content');
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }
  
    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        showNextImage();
      });
    });
  
    // Initialize the first image as active
    images[currentIndex].classList.add('active');
  });