// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
// Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup

import { Contact, modificableContracKeys } from "./contact";
import { ContactsList } from "./contact-list";
import { Group } from "./group";
import { GroupsList } from "./group-list";

interface IAddressBook {
  contactsList: ContactsList;
  groupsList: GroupsList;
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
  //private
  contactsList: ContactsList = new ContactsList();
  groupsList: GroupsList = new GroupsList();

  addNewContact(name: string, surname: string, email: string) {
    this.contactsList.addNewContact(name, surname, email);
  }

  deleteContact(contactId: string) {
    this.contactsList.deleteContact(contactId);
    this.groupsList.deleteContactFromGroups(contactId);
  }

  modifyContact(contactId: string, key: modificableContracKeys, value: string) {
    this.contactsList.modifyContact(contactId, key, value);
  }

  addGroup(name: string) {
    this.groupsList.addGroup(name);
  }

  deleteGroup(groupName: string) {
    this.groupsList.deleteGroup(groupName);
  }

  modifyGroup(groupName: string, value: string) {
    this.groupsList.modifyGroup(groupName, value);
  }

  addContactToGroup(groupName: string, contact: Contact) {
    const groupToAddContact = this.groupsList.findGroup(groupName);
    if (!groupToAddContact) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }
    if (groupToAddContact.checkIfContactExists(contact.id)) {
      throw new Error("Such a contact already is in this group");
    }
    groupToAddContact.addContact(contact);
  }

  deleteContactFromGroup(groupName: string, contactId: string) {
    const groupToAddContact = this.groupsList.findGroup(groupName);
    if (!groupToAddContact) {
      throw new Error("Such a group doesn't exist in this AddressBook");
    }

    if (!groupToAddContact.checkIfContactExists(contactId)) {
      throw new Error("Such a contact doesn't exist in this group");
    }
  }

  findGroup(groupName: string) {
    return this.groupsList.findGroup(groupName);
  }

  findContact(constactId: string) {
    return this.contactsList.findContact(constactId);
  }
}
