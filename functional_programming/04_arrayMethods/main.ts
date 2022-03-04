const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forEachFn = <T>(array: T[], callback: (data: T) => void): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const mapFn = <T, K>(
  array: T[],
  callback: (data: T, index?: number, array?: T[]) => K
) => {
  const mapedArr: K[] = [];
  for (let i = 0; i < array.length; i++) {
    mapedArr.push(callback(array[i], i));
  }
  return mapedArr;
};

function* entriesFn<T>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    yield [i];
  }
}

const filterFn = <T>(
  array: T[],
  callback: (data: T, index?: number, array?: T[]) => boolean
): T[] => {
  const filteredArr: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
};

const reduceFn = <T>(
  array: T[],
  callback: (accumulator: T, current: T, index: number, array: T[]) => T,
  inital?: T
): T => {
  let accumulator: T;
  let start: number;

  if (inital) {
    accumulator = inital;
    start = 0;
  } else {
    accumulator = array[0];
    start = 1;
  }

  for (let i = start; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};

const everyFn = <T>(array: T[], callback: (data: T) => boolean): boolean => {
  for (let i = 0; array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

const someFn = <T>(array: T[], callback: (data: T) => boolean): boolean => {
  for (let i = 0; array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

const logData = (data: any): void => {
  console.log(data);
};

const multiplyByIndex = (number: number, index: number) => {
  return number * index;
};

const isEven = (num: number): boolean => num % 2 === 0;

const addUp = (total: number, current: number, index: number): number => {
  return total + current + index;
};

forEachFn(numArray, logData);
console.log(mapFn(numArray, multiplyByIndex));
console.log(entriesFn(numArray).next());
console.log(filterFn(numArray, isEven));
console.log(reduceFn(numArray, addUp, 0));
console.log(everyFn(numArray, isEven));
console.log(someFn(numArray, isEven));
