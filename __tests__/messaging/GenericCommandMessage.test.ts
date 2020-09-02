import { GenericCommandMessage } from "../../src/messaging/GenericCommandMessage";
import { InvalidPayloadError } from "../../src/messaging/InvalidPayloadError";
import { Command } from "../../src/command";

it("should throw InvalidPayloadError if payload does not have commandName", () => {
  expect(() =>
    GenericCommandMessage.asCommandMessage(({ targetAggregateIdentifier: "asd" } as unknown) as Command),
  ).toThrowError(InvalidPayloadError);
});
