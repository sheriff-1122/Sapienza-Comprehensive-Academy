 function initSlideshow(slideshowId, interval = 3000) {
  const container = document.getElementById(slideshowId);
  const slides = container.getElementsByTagName('img');
  let index = 0;

  slides[index].classList.add('active');

  setInterval(() => {
    
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, interval);
}

// Initialize slideshows
initSlideshow('mathSlideshow', 3000);
initSlideshow('englishSlideshow', 3000);
initSlideshow('scienceSlideshow', 3000);
