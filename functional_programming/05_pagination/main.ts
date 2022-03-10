const paginateArray = <T>(dataEntries: T[], settings: Setting): T[] => {
  validateInput(dataEntries, settings);
  return dataEntries.filter((entry, index) => isDataOnPage(index, settings));
};

const isDataOnPage = (
  dataIndex: number,
  { entriesOnPage, actualPageIdx }: Setting
): boolean => {
  return (
    dataIndex >= entriesOnPage * actualPageIdx &&
    dataIndex <= entriesOnPage * actualPageIdx + entriesOnPage - 1
  );
};

const validateInput = <T>(
  dataEntries: T[],
  { entriesOnPage, actualPageIdx }: Setting
) => {
  throwIfNotPositive(actualPageIdx);
  throwIfNotPositive(entriesOnPage);
  throwIfNoEntriesOnPage(dataEntries, { entriesOnPage, actualPageIdx });
};

const throwIfNotInt = (number: number): void => {
  if (!Number.isInteger(number)) {
    throw new Error("Given number must be an integer");
  }
};

const throwIfNotPositive = (number: number): void => {
  if (number <= 0) {
    throw new Error("Given number must be greater than 0");
  }
};

const throwIfNoEntriesOnPage = <T>(
  array: T[],
  { entriesOnPage, actualPageIdx }: Setting
): void => {
  const lastIndexOfArr = array.length - 1;
  const firstIndexOfDisplayedData = entriesOnPage * actualPageIdx;

  if (firstIndexOfDisplayedData > lastIndexOfArr) {
    throw new Error("No data to display");
  }
};

type Setting = {
  actualPageIdx: number;
  entriesOnPage: number;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const settings = { actualPageIdx: 1, entriesOnPage: 8 };
const result = paginateArray(data, settings);
console.log(result);
