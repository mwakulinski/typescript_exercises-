import { Email } from "./email";
import { Validator } from "./validator";
interface IEmailBuilder {
  setFrom: (from: string) => void;
  setTo: (to: string) => void;
  setTitle: (title: string) => void;
  setCc: (cc: string) => void;
  setBcc: (bcc: string) => void;
  setHtml: (html: string) => void;
}

export class EmailBuilder implements IEmailBuilder {
  private email: Email;

  constructor() {
    this.reset();
  }

  setFrom(from: string) {
    Validator.throwIfEmptyString(from);
    this.throwIfNotEmail(from);
    this.email.from = from;
    return this;
  }

  setTo(...to: string[]) {
    to.forEach((address) => {
      Validator.throwIfEmptyString(address);
      this.throwIfNotEmail(address);
    });
    this.email.to = [...to];
    return this;
  }

  setTitle(title: string) {
    Validator.throwIfEmptyString(title);
    this.email.title = title;
    return this;
  }

  setCc(...cc: string[]) {
    cc.forEach((address) => {
      Validator.throwIfEmptyString(address);
      this.throwIfNotEmail(address);
    });
    this.email.cc = [...cc];
    return this;
  }

  setBcc(...bcc: string[]) {
    bcc.forEach((address) => {
      Validator.throwIfEmptyString(address);
      this.throwIfNotEmail(address);
    });
    this.email.bcc = [...bcc];
    return this;
  }

  setHtml(html: string) {
    Validator.throwIfEmptyString(html);
    this.email.html = html;
    return this;
  }

  reset() {
    return (this.email = new Email());
  }

  buildEmail() {
    const result = this.email;
    this.throwIfNoFromOrTo();
    this.reset();
    return JSON.stringify(result);
  }

  private throwIfNoFromOrTo() {
    if (this.email.from === "" || this.email.to.length === 0) {
      throw new Error("Every email must have a sender and recipant");
    }
  }

  private throwIfNotEmail(input: string) {
    if (!input.includes("@")) {
      throw new Error("Given input must be an email");
    }
  }
}
