import { DynamoDbStreamRecordHandlerAdapter } from "../../../src/messagehandling";
import { MessageHandler } from "../../../src/messagehandling/MessageHandler";
import { Message } from "../../../src/messaging/Message";
import { DomainEventMessage } from "../../../src/messaging";

const validMessage = {
  aggregateIdentifier: "contactId",
  identifier: "d04ede33-788f-40cc-bbda-25a3b3974c4c",
  payload: {
    contactId: "contactId",
    eventName: "ContactAddedEvent",
    eventVersion: 0,
    source: "test",
  },
  payloadType: "ContactAddedEvent",
  sequenceNumber: 11,
  timestamp: 1598868410698,
  type: "ContactAR",
};

const invalidMessage = {
  aggregateIdentifier: "contactId",
  identifier: "d04ede33-788f-40cc-bbda-25a3b3974c4c",
};

it("supports", () => {
  const adapter = new DynamoDbStreamRecordHandlerAdapter();
  const result = adapter.supports(validMessage);
  expect(result).toBeTruthy();
});

it("does not support", () => {
  const adapter = new DynamoDbStreamRecordHandlerAdapter();
  const result = adapter.supports(invalidMessage);
  expect(result).toBeFalsy();
});

it("delegates to handler", async () => {
  const mockHandler: MessageHandler<DomainEventMessage<unknown>, unknown, void> = {
    handleMessage: jest.fn(),
  };
  const adapter = new DynamoDbStreamRecordHandlerAdapter();
  await adapter.handle(validMessage, mockHandler);
  expect(mockHandler.handleMessage).toHaveBeenCalledWith(validMessage);
});
