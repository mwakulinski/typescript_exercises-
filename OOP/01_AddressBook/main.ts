import { AddressBook } from "./address-book";

const addressbook = new AddressBook();
addressbook.addGroup("Praca");
addressbook.addGroup("Koledzy");
addressbook.addNewContact("Anna", "Wanna", "Ann@Wan.pl");
addressbook.addNewContact("Kazimierz", "Borski", "Kaz@Bar.pl");
addressbook.addNewContact("Michal", "Waki", "mich@wak.pl");
addressbook.addNewContact("Karyna", "Wanna", "Karyna@Wan.pl");
console.log(addressbook);
addressbook.addContactToGroup("Praca", addressbook.findContact("Anna Wanna"));
addressbook.addContactToGroup("Praca", addressbook.findContact("Michal Waki"));
addressbook.deleteContact(addressbook.findContact("Anna Wanna").id);
console.log(addressbook.findGroup("Praca").contactsList);
// addressbook.deleteContact(addressbook.findContact("Anna Wanna").id);

// console.log(addressbook.groups[0]);
