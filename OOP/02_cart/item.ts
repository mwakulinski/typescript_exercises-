import { v4 as uuidv4 } from "uuid";
import { Validator } from "./validator";

export class Item {
  constructor(
    public name: string,
    public category: string[],
    readonly id: string = uuidv4()
  ) {
    Validator.throwIfEmptyString(name);
  }

  changeName(newName: string) {
    Validator.throwIfEmptyString(newName);
    this.name = newName;
  }

  addCategory(newCategory: string) {
    Validator.throwIfEmptyString(newCategory);
    this.category.push(newCategory);
  }
}
