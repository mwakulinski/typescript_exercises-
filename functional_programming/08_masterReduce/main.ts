const mapFn = <T, K>(array: T[], callback: (data: T) => K) => {
  const newArr: T[] = [];
  return array.reduce((accumulator: (T | K)[], current: T) => {
    accumulator.push(callback(current));
    return accumulator;
  }, newArr);
};

const filterFn = <T>(array: T[], callback: (data: T) => T | undefined) => {
  const newArr: T[] = [];
  return array.reduce((accumulator: T[], current: T) => {
    if (callback(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, newArr);
};

const everyFn = <T>(array: T[], callback: (data: T) => boolean) => {
  return array.reduce((accumulator: boolean, current: T) => {
    if (callback(current)) {
      return false;
    }
    return accumulator;
  }, true);
};

const SomeFn = <T>(array: T[], callback: (data: T) => boolean) => {
  return array.reduce((accumulator: boolean, current: T) => {
    if (callback(current)) {
      return true;
    }
    return accumulator;
  }, false);
};

const multiplyByTwo = (numb: number) => {
  return numb * 2;
};

const filterEven = (numb: number) => {
  if (numb % 2 === 0) return numb;
};

const isEven = (numb: number) => {
  return numb % 2 === 0;
};

const numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapFunc = mapFn(numbArr, multiplyByTwo);
console.log(mapFunc);

const filterArr = filterFn(numbArr, filterEven);
console.log(filterArr);

const areAllEven = everyFn(numbArr, isEven);
console.log(areAllEven);

const areSomeEven = SomeFn(numbArr, isEven);
console.log(areSomeEven);
