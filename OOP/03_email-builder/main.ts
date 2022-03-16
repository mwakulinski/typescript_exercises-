import { EmailBuilder } from "./email-builder";

const mail1 = new EmailBuilder()
  .setFrom("Waki@op.pl")
  .setTo("Bombaj@op.pl", "Dallas@op.pl")
  .setTitle("Hello")
  .buildEmail();

console.log(mail1);
