import { Message } from "./Message";

export class MessageList {
  private messages: Message[] = [];

  add(message: Message): void {
    this.messages.push(message);
  }

  all(): Message[] {
    return [...this.messages];
  }
}
