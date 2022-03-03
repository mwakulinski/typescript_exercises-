const paginateArray = (
  dataEntries: any[],
  settings: settingsInterface
): any[] => {
  throwIfNotInt(settings.actualPageIdx);
  throwIfNotInt(settings.entriesOnPage);
  throwIfNotPositive(settings.actualPageIdx);
  throwIfNotPositive(settings.entriesOnPage);
  throwIfNoEntriesOnPage(dataEntries, settings);
  return dataEntries.filter((entry, index) => {
    if (isDataOnPage(index, settings)) {
      return entry;
    }
  });
};

const isDataOnPage = (
  dataIndex: number,
  settings: settingsInterface
): boolean => {
  return (
    dataIndex >= settings.entriesOnPage * settings.actualPageIdx &&
    dataIndex <=
      settings.entriesOnPage * settings.actualPageIdx +
        settings.entriesOnPage -
        1
  );
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

const throwIfNoEntriesOnPage = (
  array: any[],
  settings: settingsInterface
): void => {
  const lastIndexOfArr: number = array.length - 1;
  const firstIndexOfDisplayedData: number =
    settings.entriesOnPage * settings.actualPageIdx;

  if (firstIndexOfDisplayedData > lastIndexOfArr) {
    throw new Error("No data to display");
  }
};

interface settingsInterface {
  actualPageIdx: number;
  entriesOnPage: number;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const settings = { actualPageIdx: 1, entriesOnPage: 8 };
const result = paginateArray(data, settings);
console.log(result);
