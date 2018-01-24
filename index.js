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
  var c0 = cart[0]
  var c1 = cart[1]
  
  // single + double cart
  
  if(cart.length === 0){
    return console.log("Your shopping cart is empty.")
  }
  
  else if(cart.length === 1){
    phrase += `${ob(c0)} at $${c1[ob(c0)]}.`
  }
  else if(cart.length === 2){
    phrase += `${ob(c0)} at $${c0[ob(c0)]} and ${ob(c1)} at $${c1[ob(c1)]}.`
  }
  else{
    for(var n = 0; n < cart.length; n++){
      var cN = cart[n]
     if(n === cart.length - 2){
       phrase2 = ", and " 
     }
     else if(n === cart.length - 1){
       phrase2 = ", "
     }
     else{
       phrase2 = ""
     }
     phrase += `${ob(cN)} at $${cN[ob(cN)]}`
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
