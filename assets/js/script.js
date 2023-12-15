// Cart Count
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click", () => {
   if (a < 10) {
      a++;
   }
   num.innerText = a;
})

minus.addEventListener("click", () => {
   if (a > 0) {
      a--;
   }
   num.innerText = a;
})

// Product Image

let mainImg = document.querySelector('#productImage');
let smallImg = document.querySelectorAll('.small-img');

for (let i = 0; i < smallImg.length; i++) {
   smallImg[i].onclick = function () {
      mainImg.src = smallImg[i].src;
   }
}

// Page Title
document.addEventListener('DOMContentLoaded', function () {
   const categoryLinks = document.querySelectorAll('.categories a');

   categoryLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
         event.preventDefault();
         const categoryName = link.getAttribute('href').split('=')[1];
         window.location.href = 'cate.html?category=' + categoryName;
      });
   });
});


// Product Title

function redirectToProduct(brand, title, price) {
   const productUrl = `product.html?brand=${encodeURIComponent(brand)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`;
   window.location.href = productUrl;
}


