/* 
Liskov substitution principle (Princípio da substituição de Liskov)

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

Mais simples ainda: Se um programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItems(new Product('Camiseta', 49.9));
shoppingCart.addItems(new Product('Caderno', 9.9));
shoppingCart.addItems(new Product('Lápis', 1.59));

console.log(shoppingCart.item);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
