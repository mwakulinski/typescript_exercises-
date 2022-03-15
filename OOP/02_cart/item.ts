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

// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
