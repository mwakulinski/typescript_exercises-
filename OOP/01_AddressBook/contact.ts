// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
// Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email

import { v4 as uuidv4 } from "uuid";
import { Validator } from "./validator";

export type modificableContracKeys = "name" | "surname" | "email";

/*klasa domenowa*/
export class Contact {
  readonly creationDate: Date = new Date();
  readonly id: string = uuidv4();
  public modificationDate?: Date;

  constructor(
    public name: string,
    public surname: string,
    public email: string
  ) {
    Validator.throwIfEmptyString(name);
    Validator.throwIfEmptyString(surname);
    Validator.throwIfEmptyString(email);
  }

  modifyData(key: modificableContracKeys, value: string) {
    Validator.throwIfEmptyString(key);
    Validator.throwIfEmptyString(value);
    this[key] = value;
    this.modificationDate = new Date();
  }

  checkIfHavaPhrase(phrase: string) {
    Validator.throwIfEmptyString(phrase);
    const contactValuesArr = Object.values(this);
    const contactValuesString = contactValuesArr.join(" ");
    const regExpToCheck = new RegExp(`${phrase}.*`, `gi`);
    return regExpToCheck.test(contactValuesString);
  }
}

// Dependency inversion principle
// class StockMarket {
//     constructor(requester: IMarketsRequester) {

//     }
//   }

//   interface IMarketsRequester {
//     getCurrentStocks(): void;
//   }

//   class MarketsHttpRequester implements IMarketsRequester {
//     public getCurrentStocks() {
//       /*magic trics*/
//     }
//   }

//   class MarketsGrpcRequester implements IMarketsRequester {
//     public getCurrentStocks() {
//       /*magic trics*/
//     }
//   }

//   class TestRequester implements IMarketsRequester {
//      public getCurrentStocks() {
//       return ...;
//     }
//   }

//   class HttpModule {
//     public makeHttpRequest() {
//       /*magic trics*/
//     }

//     public makeGrpcRequest() {}
//   }
