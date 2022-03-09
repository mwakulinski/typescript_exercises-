// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup

import { v4 as uuidv4 } from "uuid";
import { Contact, modificableContracKeys } from "./contact";
import { Group } from "./group";
import { Validator } from "./validator";

interface IAddressBook {
  contactsList: Contact[];
  groupsList: Group[];
  addNewContact: (name: string, surname: string, email: string) => void;
  deleteContact: (contactId: string) => void;
  modifyContact: (
    contactId: string,
    key: modificableContracKeys,
    value: string
  ) => void;
  addGroup: (name: string) => void;
  deleteGroup: (name: string) => void;
  modifyGroup: (name: string, value: string) => void;
  addContactToGroup: (name: string, contact: Contact) => void;
  deleteContactFromGroup: (name: string, contactId: string) => void;
  findGroup: (name: string) => Group | undefined;
  findContact: (phrase: string) => Contact | undefined;
}

export class AddressBook implements IAddressBook {
  contactsList: Contact[] = [];
  groupsList: Group[] = [];

  addNewContact(name: string, surname: string, email: string) {
    this.contactsList.push(new Contact(name, surname, email));
  }

  deleteContact(contactId: string) {
    if (!this.findContact(contactId)) {
      throw new Error("Such a contact doesn't exist in this AddressBook");
    }

    this.contactsList = this.contactsList.filter(({ id }) => id !== contactId); // czy nie powinniśmy zrobić osobnej klasy dla contactsList?
    this.groupsList.forEach((group) => group.deleteContact(contactId)); // zawołać tutaj deleteContactFromFroup
  }

  modifyContact(contactId: string, key: modificableContracKeys, value: string) {
    const contactToModify = this.findContact(contactId);
    if (!contactToModify) {
      throw new Error("Such a contact doesn't exist in this AddressBook");
    }
    contactToModify.modifyData(key, value);
  }

  addGroup(name: string) {
    if (this.findGroup(name)) {
      throw new Error("Such a group already exists");
    }
    this.groupsList.push(new Group(name));
  }

  deleteGroup(groupName: string) {
    if (!this.findGroup(groupName)) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }
    this.groupsList.filter(({ name }) => name === groupName);
  }

  modifyGroup(groupName: string, value: string) {
    const groupToModify = this.findGroup(groupName);
    if (!groupToModify) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }
    groupToModify.changeName(value);
  }

  addContactToGroup(groupName: string, contact: Contact) {
    const groupToAddContact = this.findGroup(groupName);
    if (!groupToAddContact) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }
    if (groupToAddContact.checkIfContactExists(contact.id)) {
      throw new Error("Such a contact already is in this group");
    }
    this.contactsList.push(contact);
  }

  deleteContactFromGroup(groupName: string, contactId: string) {
    const groupToAddContact = this.findGroup(groupName);
    if (!groupToAddContact) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }

    if (!groupToAddContact.checkIfContactExists(contactId)) {
      throw new Error("Such a contact doesn't exist in this group");
    }
  }

  findGroup(groupName: string) {
    return this.groupsList.find(
      ({ name }) => name.toLowerCase() === groupName.toLowerCase()
    );
  }

  findContact(phrase: string) {
    Validator.throwIfEmptyString(phrase);
    return this.contactsList.find((contact) =>
      contact.checkIfHavaPhrase(phrase)
    );
  }
}
