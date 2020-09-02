import { InvalidPayloadError } from "../../src/messaging/InvalidPayloadError";
import { Event } from "../../src/event";
import { GenericDomainEventMessage } from "../../src/messaging/GenericDomainEventMessage";

it("should throw InvalidPayloadError if payload does not have eventName", () => {
  const event = ({ some: "prop" } as unknown) as Event;
  expect(() => GenericDomainEventMessage.asDomainEventMessage("Aggregate", event, "id", 0)).toThrowError(
    InvalidPayloadError,
  );
});
it("should have a timestamp and identifier", () => {
  const event = {
    eventName: "event",
    eventVersion: 0,
  };
  const message = GenericDomainEventMessage.asDomainEventMessage("Aggregate", event, "id", 0);
  expect(message.timestamp).not.toBeNull();
  expect(message.identifier).not.toBeNull();
});
