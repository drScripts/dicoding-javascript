class Mail {
  constructor(from, contacts, yourOtherProperty) {
    this.from = from;
    this.contacts = contacts;
    this.yourOtherProperty = yourOtherProperty;
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to);
  }
}
