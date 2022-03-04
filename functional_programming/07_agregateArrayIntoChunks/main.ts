const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const min = 4;
const max = 7;

const aggregateIntoChunks = <T>(array: T[]) => {
  const chunksLengthArr: number[] = generateChunksLength(array);
  const properChunksLengthArr: number[] = modifyChunksLengthIfNeeded(
    array,
    chunksLengthArr
  );

  let sum = 0;
  return properChunksLengthArr.map((chunkLenth: number): T[] => {
    const chunk: T[] = array.slice(sum, sum + chunkLenth);
    sum += chunkLenth;
    return chunk;
  });
};

const modifyChunksLengthIfNeeded = <T>(
  mainArr: T[],
  chunksArray: number[]
): number[] => {
  const chunksLengthSum: number = chunksArray.reduce((total, current) => {
    total += current;
    return total;
  }, 0);

  if (isChunksSumLongerThanArrLength(chunksLengthSum, mainArr.length)) {
    chunksArray[chunksArray.length - 1] -= chunksLengthSum - mainArr.length;
  }

  if (
    chunksArray[chunksArray.length - 1] + chunksArray[chunksArray.length - 2] <=
    7
  ) {
    chunksArray[chunksArray.length - 2] =
      chunksArray[chunksArray.length - 1] + chunksArray[chunksArray.length - 2];
    chunksArray.pop();
  }

  while (chunksArray[chunksArray.length - 1] < 4) {
    chunksArray[chunksArray.length - 1] += 1;
    chunksArray[chunksArray.length - 2] -= 1;
  }

  return chunksArray;
};

const isChunksSumLongerThanArrLength = (
  chunksSum: number,
  arrLength: number
) => {
  return chunksSum > arrLength;
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

const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);
// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
