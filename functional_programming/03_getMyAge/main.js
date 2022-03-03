"use strict";
// Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który otrzyma
const getAge = (date) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearOfBirth = calculateYearOfBirth(date, currentDate);
    throwIfYearNotPossible(yearOfBirth);
    throwIfBirthAfterCurrentDate(yearOfBirth, currentYear);
    return `You are ${currentYear - yearOfBirth} years old`;
};
const calculateYearOfBirth = (yearOfBirth, currentYear) => {
    if (typeof yearOfBirth === "string") {
        return getBirthYearFromString(yearOfBirth);
    }
    else if (typeof yearOfBirth === "number") {
        throwIfNotInt(yearOfBirth);
        return yearOfBirth;
    }
    return getBirthYearFromDate(yearOfBirth, currentYear);
};
const getBirthYearFromDate = (dateOfBirth, currentDate) => {
    let birthYear = dateOfBirth.getFullYear();
    if (currentDate.getMonth() < dateOfBirth.getMonth()) {
        birthYear += 1;
    }
    else if (currentDate.getMonth() === dateOfBirth.getMonth() &&
        currentDate.getDay() < dateOfBirth.getDay()) {
        birthYear += 1;
    }
    return birthYear;
};
const getBirthYearFromString = (birthYear) => {
    const yearOfbirth = parseInt(birthYear);
    throwIfNotInt(yearOfbirth);
    return yearOfbirth;
};
const throwIfNotInt = (date) => {
    if (!Number.isInteger(date)) {
        throw new Error(`${date} must be an integer`);
    }
};
const throwIfBirthAfterCurrentDate = (birthYear, currentYear) => {
    if (birthYear > currentYear) {
        throw new Error("Year of birth can not be bigger than current year");
    }
};
const throwIfYearNotPossible = (year) => {
    if (year < 1900) {
        throw new Error("You can't be this old");
    }
};
console.log(getAge(1992));
console.log(getAge(`1992`));
console.log(getAge(new Date(1992, 3, 20)));
