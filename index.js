var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({[item]: Math.floor(Math.random()*100)})
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  var phrase = "In your cart, you have "
  var ob = Object.keys
  
  // single + double cart
  
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  }
  
  else if(cart.length === 1){
    phrase += `${cart[0]} at $${cart[0][ob(cart[0])]}.` )
  }
  else if(cart.length === 2){
    phrase += `${ob(cart[0])} at $${cart[0][ob(cart[0])]} and ${ob(cart[1])} at $${cart[1][ob(cart[1])]}.` )
  }
  else{
    for(var n = 0; n < cart.length; n++){
     if(n === cart.length - 2){
       phrase2 = ", and " 
     }
     else if(n === cart.length - 1){
       phrase2 = ", "
     }
     else{
       phrase2 = ""
     }
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
