// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

import { data } from "./data";
type Data = typeof data;

const filterWith = <T>(array: T[], phraseToFind: string) => {
  return array.filter((seekData) => {
    return checkIfHavePhrase(seekData, phraseToFind);
  });
};

const checkIfHavePhrase = <T, K>(obj: T, phraseToFind: string): K | boolean => {
  const regExpToCheck: RegExp = new RegExp(`^${phraseToFind}.*`, "gi");
  const objValues = Object.values(obj);
  return objValues.some((value) => {
    if (typeof value === "object") {
      return checkIfHavePhrase(value, phraseToFind);
    }
    return regExpToCheck.test(value);
  });
};

const output = filterWith(data, "male");
console.log(output);
