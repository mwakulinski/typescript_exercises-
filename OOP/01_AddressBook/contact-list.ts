import { Contact, modificableContracKeys } from "./contact";
import { Validator } from "./validator";

interface IContacstList {
  contacts: Contact[];
  addNewContact: (name: string, surname: string, email: string) => void;
  addContact: (contact: Contact) => void;
  modifyContact: (
    contactId: string,
    key: modificableContracKeys,
    value: string
  ) => void;
  findContact: (contactId: string) => Contact | undefined;
  checkIfContactExists: (contactId: string) => boolean;
}

export class ContactsList implements IContacstList {
  contacts: Contact[] = [];

  addNewContact(name: string, surname: string, email: string) {
    this.contacts.push(new Contact(name, surname, email));
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  deleteContact(contactId: string) {
    const contactToModify = this.findContact(contactId);
    if (!contactToModify) {
      // throw new Error("Such a contact does not exist");
    }
    this.contacts = this.contacts.filter(({ id }) => id !== contactId);
  }

  modifyContact(contactId: string, key: modificableContracKeys, value: string) {
    const contactToModify = this.findContact(contactId);
    if (!contactToModify) {
      throw new Error("Such a contact does not exist");
    }
    contactToModify.modifyData(key, value);
  }

  findContact(contactId: string) {
    return this.contacts.find((contact) =>
      contact.checkIfHavaPhrase(contactId)
    );
  }

  checkIfContactExists(contactId: string) {
    return this.contacts.some((contact) =>
      contact.checkIfHavaPhrase(contactId)
    );
  }
}
