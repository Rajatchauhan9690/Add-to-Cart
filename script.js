document.addEventListener('DOMContentLoaded', function () {
  const clickableImages = document.querySelectorAll('.clickable-image');

  clickableImages.forEach(img => {
      img.addEventListener('click', function () {
          const mainShoeImage = document.getElementById('mainShoeImage');
          mainShoeImage.src = this.src; // Change the main image source to the clicked one
          mainShoeImage.alt = this.alt; // Update alt text accordingly
      });
  });
});
