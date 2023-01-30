/* 
Interface segregation principle (Princípio da segregação de interface)
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
    'Leonardo',
    'Santos',
    '111.111.111-11',
);
const enterpriseCustomer = new EnterpriseCustomer(
    'Lsptech',
    '111.111.111/1111-11',
);
const order = new Order(
    shoppingCart,
    messaging,
    persistency,
    enterpriseCustomer,
);

shoppingCart.addItems(new Product('Camiseta', 49.9));
shoppingCart.addItems(new Product('Caderno', 9.9));
shoppingCart.addItems(new Product('Lápis', 1.59));

console.log(shoppingCart.item);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
