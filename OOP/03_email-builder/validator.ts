export class Validator {
  static throwIfEmptyString(data: string) {
    if (data.length === 0) {
      throw new Error("Input can not be an empty string");
    }
  }
}
