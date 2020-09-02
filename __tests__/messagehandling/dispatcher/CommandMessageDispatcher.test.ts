import { CommandMessageDispatcher } from "../../../src/messagehandling/dispatcher/CommandMessageDispatcher";
import { PayloadTypeHandlerMapping } from "../../../src/messagehandling/mapping/PayloadTypeHandlerMapping";
import { MessageHandler } from "../../../src/messagehandling/MessageHandler";
import { Message } from "../../../src/messaging/Message";
import { GenericCommandMessage } from "../../../src/messaging";
import { MissingCommandHandlerError } from "../../../src/messagehandling/dispatcher/MissingCommandHandlerError";

beforeEach(() => {
  jest.resetAllMocks();
});

it("throws when no handler for command", async () => {
  const mockHandler: MessageHandler<Message<unknown>, unknown, unknown> = {
    handleMessage: jest.fn(),
  };
  const dispatcher = new CommandMessageDispatcher({
    mappings: [new PayloadTypeHandlerMapping({ payloadType: "MatchPayload", handler: mockHandler })],
  });
  const message = GenericCommandMessage.asCommandMessage({
    commandName: "NoMatch",
    targetAggregateIdentifier: "",
    targetAggregateVersion: 0,
  });

  await expect(dispatcher.doDispatch(message)).rejects.toThrow(MissingCommandHandlerError);
});
it("dispatches and returns", async () => {
  const mockResponse = {
    prop: "value",
  };
  const mockHandler: MessageHandler<Message<unknown>, unknown, unknown> = {
    handleMessage: jest.fn().mockImplementation(async () => {
      return mockResponse;
    }),
  };

  const dispatcher = new CommandMessageDispatcher({
    mappings: [new PayloadTypeHandlerMapping({ payloadType: "MatchPayload", handler: mockHandler })],
  });
  const message = GenericCommandMessage.asCommandMessage({
    commandName: "MatchPayload",
    targetAggregateIdentifier: "",
    targetAggregateVersion: 0,
  });

  const result = await dispatcher.doDispatch(message);
  expect(mockHandler.handleMessage).toHaveBeenCalledWith(message);
  expect(result).toEqual(mockResponse);
});
