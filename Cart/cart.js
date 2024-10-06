const product = [
  {
      id: 0,
      image: '../images/controller1.png',
      title: 'PS4 V2 Dualshock 4',
      price: 3999,
  },
  {
      id: 1,
      image: '../images/controller2.png',
      title: 'Xbox Wireless Controller',
      price: 3499,
  },
  {
      id: 2,
      image: '../images/controller3.png',
      title: 'Nintendo Switch Pro Controller',
      price: 4999,
  },
  {
      id: 3,
      image: '../images/headset.png',
      title: 'SteelSeries Arctis 7',
      price: 8999,
  },
  {
      id: 4,
      image: '../images/keyboard.png',
      title: 'Razer BlackWidow',
      price: 5499,
  },
 
  {
      id: 5,
      image: '../images/mouse.png',
      title: 'Logitech G502 Hero',
      price: 2999,
  },
  {
    id: 6,
    image: '../images/chair.png',
    title: 'Secretlab Omega',
    price: 24999,
},
  ];
  const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
  document.getElementById('root').innerHTML = categories.map((item)=>
  {
  var {image, title, price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>Rs ${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
  }).join('')
  
  var cart =[];
  
  function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
  }
  function buyNow(a) {
    cart.push({ ...categories[a] });
    alert(`${categories[a].title} has been added to your cart!`); 
    displaycart();
}
  function delElement(a){
  cart.splice(a, 1);
  displaycart();
  }
  
  function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "Rs "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "Rs "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:15px;'>${title}</p>
              <h2 style='font-size: 15px;'>Rs ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }
  
  
  }
  let carts= document.getElementById('carts');
  let sidebox = document.getElementById('sidebox');
  let mine = document.getElementById('mine');
  
  carts.addEventListener('click', function(){
      sidebox.style.display = 'block';
  })
  mine.addEventListener('click', function(){
      sidebox.style.display = 'none';
  })