// Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
// Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie

import { Contact } from "./contact";
import { v4 as uuidv4 } from "uuid";

interface IGroup {
  name: string;
  contactsList: Contact[];
  id: string;
  changeName: (newName: string) => string;
  addContact: (name: string, surname: string, email: string) => void;
  deleteContact: (contactId: string) => void;
  checkIfCintactExists: (phrase: string) => boolean;
}
