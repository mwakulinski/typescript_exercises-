// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

import { Contact } from "./contact";
import { v4 as uuidv4 } from "uuid";
import { Validator } from "./validator";

interface IGroup {
  name: string;
  contactsList: Contact[];
  id: string;
  changeName: (newName: string) => void;
  addContact: (name: string, surname: string, email: string) => void;
  deleteContact: (contactId: string) => void;
  checkIfCintactExists: (phrase: string) => boolean;
}

export class Group implements IGroup {
  public contactsList: Contact[] = [];
  readonly id: string = uuidv4();
  constructor(public name: string) {
    Validator.throwIfEmptyString(name);
  }

  changeName(newName: string) {
    Validator.throwIfEmptyString(newName);
    this.name = newName;
  }

  addContact(name: string, surname: string, email: string) {
    this.contactsList.push(new Contact(name, surname, email));
  }

  deleteContact(contactId: string) {
    if (!this.checkIfCintactExists(contactId)) {
      throw new Error("Such a contact does not exist in this group");
    }
    this.contactsList = this.contactsList.filter(({ id }) => id !== contactId);
  }

  checkIfCintactExists(phrase: string) {
    return this.contactsList.some((contact) =>
      contact.checkIfHavaPhrase(phrase)
    );
  }
}
