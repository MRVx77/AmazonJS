import { renderCheckoutHeadaer } from "./checkout/checkoutHeader.js";
import { renderOrderSummery } from "./checkout/OrderSummery.js";
import { renderPaymentSummery } from "./checkout/PaymentSummery.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch,  } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage(){

  try{

    await Promise.all([
       loadProductsFetch(),
       loadCartFetch()
    ]);
    

    
  } catch(error) {
    console.log('unexpexted error, please try again later');
  }

  renderCheckoutHeadaer();
  renderOrderSummery();
  renderPaymentSummery();

}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values);
  renderCheckoutHeadaer();
  renderOrderSummery();
  renderPaymentSummery();
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  });

}).then((value)=>{
  console.log(value);
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
  renderCheckoutHeadaer();
  renderOrderSummery();
  renderPaymentSummery();
});
*/

// loadProducts(()=>{
//   loadCart(()=>{
//     renderCheckoutHeadaer();
//     renderOrderSummery();
//     renderPaymentSummery();
//   });
// });
