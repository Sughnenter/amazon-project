import { renderOrderSummary } from './checkout/orderSummary.js'
import { rednerPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
//import '../data/backend-practice.js'
//import '../data/cart-class.js'
loadProducts(() => {
  renderOrderSummary();
  rednerPaymentSummary();
});
