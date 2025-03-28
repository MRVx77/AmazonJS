import { validDeliveryOptions } from "./deliveryOptions.js";

function Cart(localStoragekey) {
  const cart = {
    cartItem: undefined, // const cart = undefine/ cart;
  
      loadFromStorage() {
      this.cartItem = JSON.parse(localStorage.getItem(localStoragekey));
    
    if(!this.cartItem) {
      this.cartItem = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId : '2'
      }];
    }
    },
  
    saveToStorage(){
      localStorage.setItem(localStoragekey, JSON.stringify(this.cartItem));
    },
  
    addtoCart(productId) {
  
      let matchingItem;
    
      this.cartItem.forEach((cartItem) => {
       if(productId === cartItem.productId) {
         matchingItem = cartItem;
       }
      });
    
      if(matchingItem) {
       matchingItem.quantity +=1;
      } else {
       this.cartItem.push({
         productId: productId,
         quantity: 1,
         deliveryOptionId: '1'
       });
      }
    
      this.saveToStorage();
    },
  
      removeFromCart(productId) {
      const newCart = [];
      this.cartItem.forEach((cartItem)=> {
        if(cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItem = newCart;
    
      this.saveToStorage();
    },
  
     calculateCartQuantity() {
      let cartQuantity = 0;
    
      this.cartItem.forEach((cartItem)=>{
       cartQuantity += cartItem.quantity;
      });
      return cartQuantity;
    },
  
      updateQuantity(productId, newQuantity) {
      let matchingItem;
      
      this.cartItem.forEach((cartItem) =>{
        if(productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
  
      matchingItem.quantity = newQuantity;
  
      this.saveToStorage();
    },
  
     updateDeliveryOptions(productId, deliveryOptionId) {
      let matchingItem;
  
      this.cartItem.forEach((cartItem) => {
       if(productId === cartItem.productId) {
         matchingItem = cartItem;
       }
      });
  
      if(!matchingItem) {
        return;
      }
  
      if(!validDeliveryOptions(deliveryOptionId)) {
        return;
      }
  
      matchingItem.deliveryOptionId = deliveryOptionId;
  
      this.saveToStorage();
    }
  };

  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);