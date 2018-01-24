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
  var cL = cart.length
  
  // single + double cart
  
  if(cL === 0){
    return console.log("Your shopping cart is empty.")
  }
  
  else if(cL === 1){
    phrase += `${ob(cart[0])} at $${cart[0][ob(cart[0])]}.`
  }
  else if(cL === 2){
    phrase += `${ob(cart[0])} at $${cart[0][ob(cart[0])]} and ${ob(cart[1])} at $${cart[1][ob(cart[1])]}.`
  }
  else{
    for(var n = 0; n < cL; n++){
      var phrase2
     if(n === cL - 2){
       phrase2 = ", and " 
     }
     else if(n === cL - 1){
       phrase2 = ""
     }
     else{
       phrase2 = ", "
     }
     phrase += `${ob(cart[n])} at $${cart[n][ob(cart[n])]}` + phrase2 + `${n === cL - 1 ? '.' : ''}`
    }
  }
  return console.log(phrase)
}

function total() {
  var total = 0
  for(var n = 0; n < cart.length; n++){
  total += cart[n][Object.keys(cart[n])]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
