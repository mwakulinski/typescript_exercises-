const mapFn = <T, K>(array: T[], callback: (data: T) => K) => {
  return array.reduce((accumulator: (T | K)[], current: T) => {
    accumulator.push(callback(current));
    return accumulator;
  }, [] as T[]);
};

const filterFn = <T>(array: T[], callback: (data: T) => boolean) => {
  return array.reduce((accumulator: T[], current: T) => {
    if (callback(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, [] as T[]);
};

const everyFn = <T>(array: T[], callback: (data: T) => boolean) => {
  return array.reduce((accumulator: boolean, current: T) => {
    if (!callback(current)) {
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

const isEven = (numb: number) => {
  return numb % 2 === 0;
};

const numbArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapFunc = mapFn(numbArr, multiplyByTwo);
console.log(mapFunc);

const filterArr = filterFn(numbArr, isEven);
console.log(filterArr);

const areAllEven = everyFn(numbArr, isEven);
console.log(areAllEven);

const areSomeEven = SomeFn(numbArr, isEven);
console.log(areSomeEven);
