export class Validator {
  static throwIfEmptyString(data: string) {
    if (data.length === 0) {
      throw new Error("You can not pass empty string as a value");
    }
  }

  static throwIfNotPositive(data: number) {
    if (data < 0) {
      throw new Error("Provided data must be positive number");
    }
  }
}
