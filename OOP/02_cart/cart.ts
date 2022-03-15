import { v4 as uuidv4 } from "uuid";
import { CartItem } from "./cart-item";

export type discount = { name: string; value: number; itemId: string };

export class Cart {
  itemList: CartItem[] = [];
  totalPrice: number = 0;
  totalDiscountInPrecent: number = 0;
  id: string = uuidv4();

  addToCart(cartItem: CartItem, quantity?: number) {
    if (quantity) {
      cartItem.modifyItem("quantity", quantity);
    }
    this.itemList.push(cartItem);
  }

  removeItem(itemId: string) {
    this.itemList = this.itemList.filter(({ id }) => id !== itemId);
  }

  changeItemQuantityTo(itemId: string, quantity: number) {
    const item = this.findItemById(itemId);
    if (!item) {
      throw new Error("Such an item doesn't exist");
    }
    item.modifyItem("quantity", quantity);
  }

  setDiscount(discount: discount) {
    this.itemList.forEach((item) => {
      item.setDiscount(discount);
    });
  }

  calculateDiscount() {
    this.totalDiscountInPrecent =
      1 -
      this.calculatePriceWithDiscounts() /
        this.calculatePriceWithoutDiscounts();
  }

  calculatePrice() {
    this.totalPrice = this.calculatePriceWithDiscounts();
  }

  findItemById(itemId: string) {
    return this.itemList.find(({ id }) => id === itemId);
  }

  private calculatePriceWithDiscounts() {
    return this.itemList.reduce((accumulator, current) => {
      accumulator += current.calculatePriceAfterDiscounts();
      return accumulator;
    }, 0);
  }

  private calculatePriceWithoutDiscounts() {
    return this.itemList.reduce((accumulator, current) => {
      accumulator += current.calculatePrice();
      return accumulator;
    }, 0);
  }
}
