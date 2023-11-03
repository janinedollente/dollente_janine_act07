document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('mainImage');

  mainImage.addEventListener('mouseover', function() {
      mainImage.style.transform = 'scale(1.1)';
  });

  mainImage.addEventListener('mouseout', function() {
      mainImage.style.transform = 'scale(1)';
  });
});
