document.addEventListener('DOMContentLoaded', function() {
   const urlParams = new URLSearchParams(window.location.search);
   const brand = urlParams.get('brand');
   const title = urlParams.get('title');
   const price = urlParams.get('price');

   document.getElementById('brand').textContent = brand;
   document.getElementById('title').textContent = title;
   document.getElementById('price').textContent = `$${price}`;

   const productImage = document.getElementById('productImage');
   productImage.src = `assets/images/products/${brand.toLowerCase()}.jpg`;
});
