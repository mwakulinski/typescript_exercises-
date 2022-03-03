"use strict";
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
const findPhraseInArray = (array, phrase) => {
    const myRegExp = new RegExp(`${phrase}`, `i`);
    return array.reduce((total, current, index) => {
        if (myRegExp.test(current)) {
            total.push([current, index]);
        }
        return total;
    }, []);
};
const result = findPhraseInArray(inputData, "więcej");
console.log(result);
