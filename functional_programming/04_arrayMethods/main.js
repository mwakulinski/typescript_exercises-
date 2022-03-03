"use strict";
const forEachFn = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
const mapFn = (array, callback) => {
    const mapedArr = [];
    for (let i = 0; i < array.length; i++) {
        mapedArr.push(callback(array[i], i, array));
    }
    return mapedArr;
};
function* entriesFn(array) {
    for (let i = 0; i < array.length; i++) {
        yield [i];
    }
}
const filterFn = (array, callback) => {
    const filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
};
const reduceFn = (array, callback, inital) => {
    let total;
    let start;
    if (inital) {
        total = inital;
        start = 0;
    }
    else {
        total = array[0];
        start = 1;
    }
    for (let i = start; i < array.length; i++) {
        total = callback(total, array[i], i, array);
    }
    return total;
};
const everyFn = (array, callback) => {
    for (let i = 0; array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
};
const someFn = (array, callback) => {
    for (let i = 0; array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
};
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const logData = (data) => {
    console.log(data);
};
const multiplyByIndex = (number, index, array) => {
    return number * index;
};
const isEven = (num) => num % 2 === 0;
const addUp = (total, current, index) => {
    return total + current + index;
};
forEachFn(numArray, logData);
console.log(mapFn(numArray, multiplyByIndex));
console.log(entriesFn(numArray).next());
console.log(filterFn(numArray, isEven));
console.log(reduceFn(numArray, addUp, 0));
console.log(everyFn(numArray, isEven));
console.log(someFn(numArray, isEven));
