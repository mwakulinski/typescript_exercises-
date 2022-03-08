// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

import { data } from "./data";
type Data = typeof data;

const filterWith = (array: Data[], phraseToFind: string) => {
  return array.filter((seekData) => {
    return chckIfHavePhrase(seekData, phraseToFind);
  });
};
