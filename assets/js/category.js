document.addEventListener('DOMContentLoaded', function() {
   const urlParams = new URLSearchParams(window.location.search);
   const categoryName = urlParams.get('category');

   const categoryTitles = document.querySelectorAll('.categoryTitle');

   categoryTitles.forEach(function(title) {
       title.textContent = categoryName;
   });
});
