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
  var cL = cart.length
  
  // single + double cart
  
  if(cL === 0){
    return console.log("Your shopping cart is empty.")
  }
  
  else if(cL === 1){
    phrase += `${ob(c0)} at $${c1[ob(c0)]}.`
  }
  else if(cL === 2){
    phrase += `${ob(c0)} at $${c0[ob(c0)]} and ${ob(c1)} at $${c1[ob(c1)]}.`
  }
  else{
    for(var n = 0; n < cL; n++){
      var cN = cart[n]
     if(n === cL - 2){
       phrase2 = ", and " 
     }
     else if(n === cL - 1){
       phrase2 = ", "
     }
     else{
       phrase2 = ""
     }
     phrase += `${ob(cN)} at $${cN[ob(cN)]}` + phrase2 + `${n === cL - 1 ? "." : ","}`
    }
  }
  return console.log(phrase)
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
