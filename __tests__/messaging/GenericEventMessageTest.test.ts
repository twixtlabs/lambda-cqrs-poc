import { InvalidPayloadError } from "../../src/messaging/InvalidPayloadError";
import { GenericEventMessage } from "../../src/messaging/GenericEventMessage";
import { Event } from "../../src/event";

it("should throw InvalidPayloadError if payload does not have eventName", () => {
  expect(() => GenericEventMessage.asEventMessage(({ some: "prop" } as unknown) as Event)).toThrowError(
    InvalidPayloadError,
  );
});
it("should have a timestamp and identifier", () => {
  const event = {
    eventName: "event",
    eventVersion: 0,
  };
  const message = GenericEventMessage.asEventMessage(event);
  expect(message.timestamp).not.toBeNull();
  expect(message.identifier).not.toBeNull();
});
