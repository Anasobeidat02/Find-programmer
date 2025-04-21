ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.card', {
    delay: 100,
    origin: 'top'
});
// ===============================


document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.div1-4');
  const nextButtons = document.querySelectorAll('.next-btn');

  let currentIndex = 0;

  function showNextImage(index) {
      images[currentIndex].classList.remove('active');
      currentIndex = index;
      images[currentIndex].classList.add('active');
  }

  nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const newIndex = (currentIndex + 1) % images.length;
          showNextImage(newIndex);
      });
  });

  // Initialize the first image as active
  images[currentIndex].classList.add('active');
});


// ===============================
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.div1-5');
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
  
