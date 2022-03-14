const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const min = 4;
const max = 7;

const aggregateIntoChunks = <T>(array: T[]) => {
  const chunksLengthArr: number[] = generateChunksLength(array);
  return generateChunks(array, chunksLengthArr);
};

const generateChunks = <T>(mainArr: T[], chunkLengthArr: number[]) => {
  let sum = 0;
  return chunkLengthArr.map((chunkLenth: number): T[] => {
    const chunk: T[] = mainArr.slice(sum, sum + chunkLenth);
    sum += chunkLenth;
    return chunk;
  });
};

const generateChunksLength = <T>(array: T[]): number[] => {
  let sum = 0;
  const chunksLengthArr: number[] = [];
  let i = 0;
  while (sum !== array.length) {
    const randomNumber = generateRandomNum(min, max);
    chunksLengthArr.push(randomNumber);
    sum += randomNumber;
    sum = resetIfSumTooBig(sum, array, chunksLengthArr);
    i++;
  }
  console.log(i);
  return chunksLengthArr;
};

const resetIfSumTooBig = <T>(
  sum: number,
  mainArray: T[],
  chunkLengthArr: number[]
) => {
  if (sum > mainArray.length) {
    chunkLengthArr.length = 0;
    return 0;
  }
  return sum;
};

const generateRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);
