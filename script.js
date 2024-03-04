document.addEventListener('DOMContentLoaded', function () {
  const clickableImages = document.querySelectorAll('.clickable-image');

  clickableImages.forEach(img => {
      img.addEventListener('click', function () {
          const mainShoeImage = document.getElementById('mainShoeImage');
          mainShoeImage.src = this.src; 
          mainShoeImage.alt = this.alt; 
      });
  });
});
