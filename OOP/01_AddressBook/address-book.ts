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
  deleteContactFromGroup: (groupId: string, contactId: string) => void;
  addGroup: (name: string) => void;
  deleteGroup: (groupId: string) => void;
  modifyGroup: (groupId: string, value: string) => void;
  addContactToGroup: (groupId: string, contact: Contact) => void;
  findContact: (phrase: string) => boolean;
}
