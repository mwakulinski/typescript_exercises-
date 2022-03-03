const forEachFn = (
  array: any[],
  callback: callbackInterfaceOneParm<any>
): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const mapFn = (
  array: any[],
  callback: callbackInterfaceThreeParams<any, number, any[], any>
): any[] => {
  const mapedArr: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    mapedArr.push(callback(array[i], i, array));
  }
  return mapedArr;
};

function* entriesFn(array: any[]) {
  for (let i = 0; i < array.length; i++) {
    yield [i];
  }
}

const filterFn = (
  array: any[],
  callback: callbackInterfaceThreeParams<any, number, any[], any>
): any[] => {
  const filteredArr: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
};

const reduceFn = (
  array: any[],
  callback: callbackInterfaceFourParams<any, any, number, any[], any>,
  inital?: any
): any | any[] => {
  let total: any;
  let start: number;

  if (inital) {
    total = inital;
    start = 0;
  } else {
    total = array[0];
    start = 1;
  }

  for (let i = start; i < array.length; i++) {
    total = callback(total, array[i], i, array);
  }

  return total;
};

const everyFn = (
  array: any[],
  callback: callbackInterfaceOneParm<any, boolean>
): boolean => {
  for (let i = 0; array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

const someFn = (
  array: any[],
  callback: callbackInterfaceOneParm<any, boolean>
): boolean => {
  for (let i = 0; array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface callbackInterfaceOneParm<typeOne, typeTwo = void> {
  (param: typeOne): typeTwo;
}

interface callbackInterfaceThreeParams<
  typeOne,
  typeTwo = void,
  typeThree = void,
  typeFour = void
> {
  (param1: typeOne, param2: typeTwo, param3: typeThree): typeFour;
}

interface callbackInterfaceFourParams<
  typeOne,
  typeTwo,
  typeThree = void,
  typeFour = void,
  typeFive = void
> {
  (
    param1: typeOne,
    param2: typeTwo,
    param3: typeThree,
    param4: typeFour
  ): typeFive;
}

const logData = (data: any): void => {
  console.log(data);
};

const multiplyByIndex = (
  number: number,
  index: number,
  array: number[]
): number => {
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
