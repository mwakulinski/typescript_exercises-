import { discount } from "./cart";
import { Item } from "./item";
import { Validator } from "./validator";

export type modificableKeys = "name" | "price" | "quantity";
export type valuesTypes = string | number;

export class CartItem extends Item {
  private usedDiscounts: discount[] = [];
  private discountInPrecent: number = 0;
  constructor(
    name: string,
    categories: string[],
    private price: number,
    private quantity: number = 1
  ) {
    super(name, categories);
    Validator.throwIfNotPositive(price);
    Validator.throwIfNotPositive(quantity);
  }

  setDiscount(discount: discount) {
    if (
      this.id === discount.itemId &&
      !this.checkIfDiscoutUsed(discount.name)
    ) {
      this.discountInPrecent = discount.value;
      this.usedDiscounts.push(discount);
    }
  }

  modifyItem(key: modificableKeys, value: valuesTypes) {
    Validator.throwIfEmptyString(key);
    (this[key] as valuesTypes) = value;
  }

  calculatePriceAfterDiscounts() {
    return this.calculatePrice() * (1 - this.discountInPrecent / 100);
  }

  calculatePrice() {
    return this.price * this.quantity;
  }

  private checkIfDiscoutUsed(discountName: string) {
    return this.usedDiscounts.some(
      ({ name }) => name.toLowerCase() === discountName.toLowerCase()
    );
  }
}
