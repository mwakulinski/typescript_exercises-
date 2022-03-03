const inputData = [
  "stwórz",
  "sobie",
  "tutaj",
  "więcej",
  "wyrazów",
  "TUTAJ",
  "tuTaj",
  "ale",
  "mi",
  "się",
  "nie",
  "chcę",
  "już",
  "więcej",
  "wypisywać",
];

type SearchResult = { index: number; phrase: string };

const findPhraseInArray = (array: string[], phrase: string) => {
  const myRegExp = new RegExp(`${phrase}`, `i`);

  return array.reduce((total, current, index): [string, number][] => {
    if (myRegExp.test(current)) {
      total.push([current, index]);
    }
    return total;
  }, [] as [string, number][]);
};

const result = findPhraseInArray(inputData, "więcej");

console.log(result);
