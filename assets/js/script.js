const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");  

let a = 1;

plus.addEventListener("click", ()=> {
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

let mainImg = document.querySelector('#mainImg');
let smallImg = document.querySelectorAll('.small-img');

for (let i = 0; i < smallImg.length; i++) {
   smallImg[i].onclick = function() {
      mainImg.src = smallImg[i].src;
   }
}

