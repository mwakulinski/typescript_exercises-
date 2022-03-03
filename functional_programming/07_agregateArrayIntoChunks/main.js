"use strict";
const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const min = 4;
const max = 7;
const aggregateIntoChunks = (array) => {
    const chunksLengthArr = generateChunksLength(array);
    const properChunksLengthArr = modifyChunksLengthIfNeeded(array, chunksLengthArr);
    console.log(properChunksLengthArr);
    let sum = 0;
    return properChunksLengthArr.map((chunkLenth) => {
        const chunk = array.slice(sum, sum + chunkLenth);
        sum += chunkLenth;
        return chunk;
    });
};
const modifyChunksLengthIfNeeded = (mainArr, chunksArray) => {
    const chunksLengthSum = chunksArray.reduce((total, current) => {
        total += current;
        return total;
    }, 0);
    if (chunksLengthSum > mainArr.length) {
        chunksArray[chunksArray.length - 1] -= chunksLengthSum - mainArr.length;
    }
    if (chunksArray[chunksArray.length - 1] + chunksArray[chunksArray.length - 2] <=
        7) {
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
const generateChunksLength = (array) => {
    let sum = 0;
    const chunksLengthArr = [];
    while (sum < array.length) {
        const randomNumber = generateRandomNum(min, max);
        chunksLengthArr.push(randomNumber);
        sum += randomNumber;
    }
    return chunksLengthArr;
};
const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);
// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
