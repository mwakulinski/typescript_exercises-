// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

import { data } from "./data";
type Data = typeof data;

const filterWith = <T>(array: T[], phraseToFind: string) => {
  if (phraseToFind.length < 3) return [];

  return array.filter((seekData) => {
    return checkIfObjectHavePhrase(seekData, phraseToFind);
  });
};

const checkIfObjectHavePhrase = <T, K>(
  obj: T,
  phraseToFind: string
): K | boolean => {
  const objValues = Object.values(obj);
  return objValues.some((value) => {
    if (typeof value === "object") {
      return checkIfObjectHavePhrase(value, phraseToFind);
    }
    return testIfValueHavePhrase(value, phraseToFind);
  });
};

const testIfValueHavePhrase = (
  dataToCheck: string | number,
  phraseToFind: string
) => {
  const regExpToCheck: RegExp = new RegExp(`^${phraseToFind}.*`, "gi");
  return regExpToCheck.test(dataToCheck.toString());
};

const output = filterWith(data, "male");
const output2 = filterWith(data, "Sheppard");
console.log(output);
console.log(output2);
