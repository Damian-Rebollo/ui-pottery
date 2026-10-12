import { describe, expect, it } from "vitest";
import { Message } from "../domain/Message";
import { MessageList } from "../domain/MessageList";

describe("MessageList", () => {
  it("adds messages to the collection", () => {
    const list = new MessageList();
    list.add(new Message("Ana", "ana@example.com", "Hours", false, false));
    expect(list.all()).toHaveLength(1);
  });

  it("returns a copy of the collection", () => {
    const list = new MessageList();
    list.add(new Message("Ana", "ana@example.com", "Hours", false, false));
    list.all().pop();
    expect(list.all()).toHaveLength(1);
  });
});
