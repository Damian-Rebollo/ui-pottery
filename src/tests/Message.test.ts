import { describe, expect, it } from "vitest";
import { Message } from "../domain/Message";

describe("Message", () => {
  it("stores a message and trims its fields", () => {
    const message = new Message(
      " Ana ",
      "ana@example.com",
      " Hours ",
      true,
      false,
    );
    expect([message.name, message.email, message.text]).toEqual([
      "Ana",
      "ana@example.com",
      "Hours",
    ]);
  });

  it("rejects an empty name", () => {
    expect(
      () => new Message(" ", "ana@example.com", "Hours", false, false),
    ).toThrow();
  });

  it("rejects an empty email", () => {
    expect(() => new Message("Ana", " ", "Hours", false, false)).toThrow();
  });

  it("rejects empty text", () => {
    expect(
      () => new Message("Ana", "ana@example.com", " ", false, false),
    ).toThrow();
  });

  it("stores whether the visitor has attended before", () => {
    const message = new Message("Ana", "ana@example.com", "Hours", true, false);
    expect(message.hasAttended).toBe(true);
  });

  it("stores the notification preference", () => {
    const message = new Message("Ana", "ana@example.com", "Hours", false, true);
    expect(message.wantsNotifications).toBe(true);
  });
});
