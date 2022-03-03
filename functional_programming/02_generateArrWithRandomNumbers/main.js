"use strict";
// Napisz funkcję generateArrayWithRandomNumbers, która zwróci tablicę o długości podanej jako „howManyNumbers”. Ta tablica musi zawierać w sobie losowe liczby z zakresu min i max.
// Napisz funkcje generateArrayWithArrays, która wygeneruje array z arrayami pochodzącymi z poprzedniej funkcji
const generateArrayWithArrays = (howManyArrays, howManyNumbers, min, max) => {
    throwIfMinGreaterEqualMax(min, max);
    throwIfNotInt(howManyArrays);
    throwIfNotInt(howManyNumbers);
    return Array.from({ length: howManyArrays }, (item) => generateArrayWithRandomNumbers(howManyNumbers, min, max));
};
const generateArrayWithRandomNumbers = (howManyNumbers, min, max) => {
    throwIfNotInt(howManyNumbers);
    return Array.from({ length: howManyNumbers }, (item) => generateRandomNumber(min, max));
};
const generateRandomNumber = (min, max) => {
    throwIfMinGreaterEqualMax(min, max);
    return Math.random() * (max - min) + min;
};
const throwIfNotInt = (number) => {
    if (!Number.isInteger(number)) {
        throw new Error("Number of elements must be an integer");
    }
};
const throwIfMinGreaterEqualMax = (min, max) => {
    if (min >= max) {
        throw new Error(`Min value: ${min} must be lesser than Max value: ${max}`);
    }
};
console.log(generateArrayWithArrays(3, 10, 0, 10));
