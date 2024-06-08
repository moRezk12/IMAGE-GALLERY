
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const images = Array.from(thumbnails).map(thumbnail => thumbnail.src);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    lightboxImage.src = images[currentIndex];
    lightbox.classList.add('show');
  });
});

closeButton.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showPrevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  lightboxImage.src = images[currentIndex];
}

function showNextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  lightboxImage.src = images[currentIndex];
}
