const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const min = 4;
const max = 7;

const aggregateIntoChunks = <T>(array: T[]) => {
  const chunksLengthArr: number[] = generateChunksLength(array);
  const properChunksLengthArr: number[] = modifyChunksLengthIfNeeded(
    array,
    chunksLengthArr
  );

  return gerateChunks(array, properChunksLengthArr);
};

const gerateChunks = <T>(mainArr: T[], chunkLengthArr: number[]) => {
  let sum = 0;
  return chunkLengthArr.map((chunkLenth: number): T[] => {
    const chunk: T[] = mainArr.slice(sum, sum + chunkLenth);
    sum += chunkLenth;
    return chunk;
  });
};

const modifyChunksLengthIfNeeded = <T>(
  mainArr: T[],
  chunksArray: number[]
): number[] => {
  const chunksLengthSum: number = sumArrElem(chunksArray);

  if (isChunksSumLongerThanArrLength(chunksLengthSum, mainArr.length)) {
    shortenLastChunk(chunksArray, chunksLengthSum, mainArr.length);
  }

  const lastChunk: number = chunksArray[chunksArray.length - 1];
  const secondToLastChunk: number = chunksArray[chunksArray.length - 2];

  if (isLastTwoChunksSumSmallerEqualMax(lastChunk, secondToLastChunk)) {
    setProperLastChunkLength(chunksArray);
    return chunksArray;
  }

  while (chunksArray[chunksArray.length - 1] < min) {
    setProperLastTwoChunksLength(chunksArray);
  }

  return chunksArray;
};

const isChunksSumLongerThanArrLength = (
  chunksSum: number,
  arrLength: number
) => {
  return chunksSum > arrLength;
};

const shortenLastChunk = (
  chunksArray: number[],
  chunkLengthSum: number,
  mainArrLenth: number
) => {
  chunksArray[chunksArray.length - 1] -= chunkLengthSum - mainArrLenth;
};

const isLastTwoChunksSumSmallerEqualMax = (chunk1: number, chunk2: number) => {
  return chunk1 + chunk2 <= max;
};

const setProperLastChunkLength = (chunksArray: number[]) => {
  chunksArray[chunksArray.length - 2] += chunksArray[chunksArray.length - 1];
  chunksArray.pop();
};

const setProperLastTwoChunksLength = (chunksArray: number[]) => {
  chunksArray[chunksArray.length - 1] += 1;
  chunksArray[chunksArray.length - 2] -= 1;
};

const generateChunksLength = <T>(array: T[]): number[] => {
  let sum = 0;
  const chunksLengthArr: number[] = [];

  while (sum < array.length) {
    const randomNumber = generateRandomNum(min, max);
    chunksLengthArr.push(randomNumber);
    sum += randomNumber;
  }
  return chunksLengthArr;
};

const generateRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const sumArrElem = (array: number[]) => {
  return array.reduce((accumulator: number, current: number) => {
    return (accumulator += current);
  }, 0);
};

const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);
