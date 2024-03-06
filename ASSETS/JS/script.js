document.addEventListener('DOMContentLoaded', function() {
  const words = document.querySelectorAll('.word');
  
  words.forEach(word => {
      word.addEventListener('click', function() {
          const link = this.dataset.link;
          window.location.href = link; 
      });
  });
});
