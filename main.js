    let underr = document.querySelector(".under");
    let head = document.querySelector(".head");
    let logo = document.querySelector(".logo-img");
    
    //remove header on scroll
      document.onscroll = () => {
        if (window.scrollY < 3) {
          head.style.display = "flex";
          underr.style.position = "relative";
          logo.src="Images/260_nike.jpg";
          
        } else {
          head.style.display = "none";
          underr.style.position = "sticky";
          underr.style.top = "0";
          logo.src = "Images/Logo2.jpg";
          logo.style.width = "130px"
          logo.style.height = "80px"
          
        }
      };

      let width = document.documentElement.clientWidth;
      let smallNav = document.querySelector(".small-nav");
      let a = document.querySelector('.cart-div');
      
      function showNav() {
        if (width < 600) { // Adjust the screen width breakpoint as needed
          if (smallNav.style.display === "block") {
            smallNav.style.display = "none";
          } else {
            smallNav.style.display = "block";
            a.style.display = "none";
          }
        } else {
          smallNav.style.display = "none";
        }
      }


      let listOne = document.querySelector(".list-one");
     let listTwo = document.querySelector(".list-two");
     
     function showListOne(){
      if (width < 600) {
        if(listOne.style.display == "block"){
          listOne.style.display = "none";
        }
        else{
          listOne.style.display = "block";
        }
      }
      else{
        listOne.style.display = "block";
      }
        

        
     }

     function showListTwo(){
      if(width < 600){
        if(listTwo.style.display == "block"){
          listTwo.style.display = "none";
        }
        else{
          listTwo.style.display = "block";
        }
      }
        else{
          listTwo.style.display = "block";
      }
   }
      
      function updateNavVisibility() {
        width = document.documentElement.clientWidth;
        if (width >= 600) { // Adjust the screen width breakpoint as needed
          smallNav.style.display = "none";
          listTwo.style.display = "block";
          listOne.style.display = "block";
        }

        else{
          listTwo.style.display = "none";
          listOne.style.display = "none";
        }
      }
      
      // Call the updateNavVisibility function initially and on window resize
      updateNavVisibility();
      window.addEventListener('resize', updateNavVisibility);
      
            
     


     


     


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


//Cart for all

let total = 0;
let count = 0;
let notification = document.querySelector('.notify');
function addToCart(productCard) {
  var cartDiv = document.querySelector('.cart-div');
  var clonedProductCard = productCard.cloneNode(true);
  
  cartDiv.appendChild(clonedProductCard);


  var button = clonedProductCard.querySelector('.card-btn');
  var label = clonedProductCard.querySelector('label');
  var price = parseFloat(label.textContent);
  total += price;
  count = count + 1;
      button.textContent = 'Remove';
      button.parentElement.parentElement.style.display = "flex";
      button.parentElement.parentElement.style.gap = "10px";
      button.parentElement.parentElement.style.marginBottom = "10px";
      button.parentElement.parentElement.style.height = "100px";
      button.parentElement.style.height = "100px";
      button.parentElement.parentElement.style.fontSize = "12px";

      button.addEventListener('click', function() {
        if (button.textContent === 'Remove') {
          var parent = button.parentElement.parentElement;
          var sub = parent.querySelector('label');
          var dec = parseFloat(sub.textContent);
          total -= dec;
          count = count -1;
          parent.remove();
          var t = document.querySelector('.total');
          t.textContent = total;
          if(count > 0)
            notification.style.display = "block"
          else
            notification.style.display = "none"
          
        }
      });
}

var buttons = document.querySelectorAll('.card-btn');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    
    addToCart(this.parentElement.parentElement);
    var t = document.querySelector('.total');
      t.textContent = total;
      if(count > 0)
        notification.style.display = "block"
      else
      notification.style.display = "none"
  });
});


//Cart for features


function add2ToCart(productCard) {
  var cartDiv = document.querySelector('.cart-div');
  var clonedProductCard = productCard.cloneNode(true);
  
  cartDiv.appendChild(clonedProductCard);


  var button = clonedProductCard.querySelector('.summer-btn');
  var label = clonedProductCard.querySelector('label');
  var price = parseFloat(label.textContent);
  total += price;
  count = count + 1;
      button.textContent = 'Remove';
      button.parentElement.parentElement.style.display = "flex";
      button.parentElement.parentElement.style.gap = "10px";
      button.parentElement.parentElement.style.marginBottom = "10px";
      button.parentElement.parentElement.style.height = "100px";
      button.parentElement.style.height = "100px";
      button.parentElement.parentElement.style.fontSize = "12px";

      button.addEventListener('click', function() {
        if (button.textContent === 'Remove') {
          var parent = button.parentElement.parentElement;
          var sub = parent.querySelector('label');
          var dec = parseFloat(sub.textContent);
          total -= dec;
          count = count -1;
          parent.remove();
          var t = document.querySelector('.total');
          t.textContent = total;
          if(count > 0)
            notification.style.display = "block"
          else
            notification.style.display = "none"
          
        }
      });
}


var buttons = document.querySelectorAll('.summer-btn');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    
    add2ToCart(this.parentElement.parentElement);
    var t = document.querySelector('.total');
      t.textContent = total;
      if(count > 0)
        notification.style.display = "block"
      else
      notification.style.display = "none"
  });
});

//////////////////////////////////////////////////////////////////////////////



let confirm = document.querySelector('.confirm-btn');
let message = document.querySelector('.confirm-message');
let num = document.querySelector('.num');
let orderTotal = document.querySelector('.order-total');
confirm.addEventListener('click', function() {
  if(count == 0)
  {
    confirm.classList.add('vibrate-animation');
    setTimeout(function() {
    confirm.classList.remove('vibrate-animation');
  }, 1000);
  }
  else{
    let cartt = document.querySelector('.cart-div');
    message.style.display = "block";

    num.textContent = count;
    orderTotal.textContent = total;
    let AllCards = cartt.querySelectorAll('.product-card');
    let saleCards = cartt.querySelectorAll('.sale-card');
    for(let i = 0; i < AllCards.length; i++){
      AllCards[i].style.display = "none";
    }

    for(let i = 0; i < saleCards.length; i++){
      saleCards[i].style.display = "none";
    }
    total = 0;
    count = 0;
    cartt.style.display = "none";
    let newTotal = document.querySelector('.total');
    newTotal.textContent = total;
    
  }
});

function removeConfirm(){
  
  message.style.display = "none";
  notification.style.display = "none";
  
}



function log(){
  let login = document.querySelector('.form');
  let signin = document.querySelector('.form-2');
  signin.style.display = "none";
  login.style.display = "flex";
  
  
}

function sign(){
  let login = document.querySelector('.form');
  let signin = document.querySelector('.form-2');
  login.style.display = "none";
  signin.style.display = "flex";
  
}
















function showCart(){      //To show Cart
  
  var z = document.querySelector('.cart-div');
  var smallNav = document.querySelector('.small-nav');

  if (window.getComputedStyle(z).display === "none") {
    z.style.display = "flex";
    smallNav.style.display = "none";
  } else {
    z.style.display = "none";
  }
}

  
  
function goToSummer() {
  window.location.href = 'feature.html#summer';
}


function goToGear() {
  window.location.href = 'feature.html#nike';
}
