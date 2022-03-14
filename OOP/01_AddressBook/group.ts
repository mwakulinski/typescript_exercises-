// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

import { Contact } from "./contact";
import { v4 as uuidv4 } from "uuid";
import { Validator } from "./validator";
import { ContactsList } from "./contact-list";

export class Group {
  public contactsList: ContactsList = new ContactsList();
  readonly id: string = uuidv4();
  constructor(public name: string) {
    Validator.throwIfEmptyString(name);
  }

  changeName(newName: string) {
    Validator.throwIfEmptyString(newName);
    this.name = newName;
  }

  addContact(contact: Contact) {
    this.contactsList.addContact(contact);
  }

  deleteContact(contactId: string) {
    this.contactsList.deleteContact(contactId);
  }

  checkIfContactExists(contactId: string) {
    return this.contactsList.checkIfContactExists(contactId);
  }

  checkIfHavaPhrase(phrase: string) {
    Validator.throwIfEmptyString(phrase);
    const contactValuesArr = Object.values(this);
    const contactValuesString = contactValuesArr.join(" ");
    const regExpToCheck = new RegExp(`${phrase}.*`, `gi`);
    return regExpToCheck.test(contactValuesString);
  }
}
