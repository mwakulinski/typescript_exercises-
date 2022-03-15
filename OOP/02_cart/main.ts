import { Cart, discount } from "./cart";
import { CartItem } from "./cart-item";

const item1 = new CartItem("banan", ["jedzenie"], 10);
const item2 = new CartItem("anans", ["jedzenie"], 15);
const item3 = new CartItem("ołówki", ["szkolne"], 20);
const item4 = new CartItem("kiełbasa", ["jedzenie"], 30);

item1.addCategory("zdrowe");
const cart = new Cart();

const usedDiscount: discount = { name: "Banan10", value: 10, itemId: item1.id };

cart.addToCart(item1, 5);
cart.addToCart(item2, 5);
cart.addToCart(item3, 5);
cart.addToCart(item4, 5);
cart.setDiscount(usedDiscount);
cart.setDiscount(usedDiscount);
cart.calculateDiscount();
cart.calculatePrice();
console.log(cart);
