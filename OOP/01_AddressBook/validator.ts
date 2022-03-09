export class Validator {
  static throwIfEmptyString = (data: string) => {
    if (data.length === 0) throw new Error("You must provide some data");
  };
}
