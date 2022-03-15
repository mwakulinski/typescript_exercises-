import { v4 as uuidv4 } from "uuid";
import { Validator } from "./validator";

export class Item {
  constructor(
    public name: string,
    public categories: string[],
    readonly id: string = uuidv4()
  ) {
    Validator.throwIfEmptyString(name);
    categories.forEach((category) => Validator.throwIfEmptyString(category));
  }

  addCategory(newCategory: string) {
    Validator.throwIfEmptyString(newCategory);
    this.categories.push(newCategory);
  }
}
