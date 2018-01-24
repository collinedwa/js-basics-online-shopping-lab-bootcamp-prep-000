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
  
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  }
  
  else if(cart.length === 1){
    return (phrase + `${cart[0]} at $${cart[0][Object.keys(cart[0])]}.` )
  }
  else if(cart.length === 2){
    return (phrase + `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.` )
  }
  else{
    for(var n = 0; n < cart.length; n++){
     if(n === cart.length - 2){
       phrase2 = ", and " 
     }
     else if(n === cart.length - 1){
       phrase2 = ""
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
