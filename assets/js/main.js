
document.addEventListener('DOMContentLoaded', function () {
   const itemsContainer1 = document.querySelector('#featuredProducts .pro-container');
   const itemsContainer2 = document.querySelector('#newArrivals .pro-container');
   const itemsContainer3 = document.querySelector('#relatedProducts .pro-container');

   let bagItems;

   onLoad();

   function onLoad() {
      let bagItemsStr = localStorage.getItem('bagItems');
      bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
      displayBagItems();
   }


   function addToBag(itemId) {
      bagItems.push(itemId);
      localStorage.setItem('bagItems', JSON.stringify(bagItems));
      displayBagItems();
   }

   function displayBagItems() {
      let bagItemCount = document.querySelector('.quantity');
      if (bagItems.length > 0) {
         bagItemCount.innerText = bagItems.length;
         bagItemCount.style.visibility = 'visible';
      } else {
         bagItemCount.style.visibility = 'hidden';
      }  
   }



   let innerHTML = '';

   for (let i = 0; i < Math.min(items.length, 4); i++) {
      const item = items[i];
      innerHTML += `
   <div class="pro">
      <img src="${item.image}" onclick="redirectToProduct('${item.name}', '${item.description}', ${item.price});">
      <div class="des">
            <span>${item.name}</span>
            <h5>${item.description}</h5>
            <div class="star">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${item.price}</h4>
      </div>
      <i onclick="addToBag(${item.id})" class="fa-solid cart fa-cart-shopping"></i>
   </div>
   `;
   }

   itemsContainer1.innerHTML = innerHTML;

   innerHTML = '';

   for (let i = 4; i < Math.min(items.length, 12); i++) {
      const item = items[i];
      innerHTML += `
   <div class="pro">
      <img src="${item.image}" onclick="redirectToProduct('${item.name}', '${item.description}', ${item.price});">
      <div class="des">
            <span>${item.name}</span>
            <h5>${item.description}</h5>
            <div class="star">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${item.price}</h4>
      </div>
      <i onclick="addToBag(${item.id})" class="fa-solid cart fa-cart-shopping"></i>
   </div>
   `;
   }

   itemsContainer2.innerHTML = innerHTML;

   innerHTML = '';

   for (let i = 12; i < Math.min(items.length, 20); i++) {
      const item = items[i];
      innerHTML += `
   <div class="pro">
      <img src="${item.image}" onclick="redirectToProduct('${item.name}', '${item.description}', ${item.price});">
      <div class="des">
            <span>${item.name}</span>
            <h5>${item.description}</h5>
            <div class="star">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
            </div>
            <h4>$${item.price}</h4>
      </div>
      <i onclick="addToBag(${item.id})" class="fa-solid cart fa-cart-shopping"></i>
   </div>
   `;
   }
});