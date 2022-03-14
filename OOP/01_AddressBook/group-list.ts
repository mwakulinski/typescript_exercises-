import { Group } from "./group";

interface IGroupsList {
  groups: Group[];
  addGroup: (name: string) => void;
  deleteGroup: (groupId: string) => void;
  modifyGroup: (groupId: string, newValue: string) => void;
  findGroup: (phrase: string) => Group | undefined;
  filterGroupsWithContact: (contactId: string) => Group[] | undefined;
  deleteContactFromGroups: (contactId: string) => void;
}

export class GroupsList implements IGroupsList {
  groups: Group[] = [];
  addGroup(name: string) {
    if (this.findGroup(name)) {
      throw new Error("Such a group already exist");
    }
    this.groups.push(new Group(name));
  }

  deleteGroup(groupId: string) {
    const groupToDelete = this.findGroup(groupId);
    if (!groupToDelete) {
      throw new Error("Such a group does not exits");
    }
    this.groups = this.groups.filter(({ id }) => id !== groupId);
  }

  modifyGroup(groupId: string, newValue: string) {
    const groupToModify = this.findGroup(groupId);
    if (!groupToModify) {
      throw new Error("Such a group does not exist");
    }
    groupToModify.changeName(newValue);
  }

  findGroup(phrase: string) {
    return this.groups.find((group) => group.checkIfHavaPhrase(phrase));
  }

  deleteContactFromGroups(contactId: string) {
    this.groups.forEach((group) => group.deleteContact(contactId));
  }

  filterGroupsWithContact(contactId: string) {
    return this.groups.filter((group) => group.checkIfContactExists(contactId));
  }
}
