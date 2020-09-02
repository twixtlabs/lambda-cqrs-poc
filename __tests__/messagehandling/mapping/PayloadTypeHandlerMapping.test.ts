import { PayloadTypeHandlerMapping } from "../../../src/messagehandling/mapping/PayloadTypeHandlerMapping";
import { MessageHandler } from "../../../src/messagehandling/MessageHandler";
import { Message } from "../../../src/messaging/Message";

const mockHandler: MessageHandler<Message<unknown>, unknown, unknown> = {
  handleMessage: jest.fn(),
};

beforeEach(() => {
  jest.resetAllMocks();
});
it("returns handler when match", () => {
  const mapping = new PayloadTypeHandlerMapping({
    handler: mockHandler,
    payloadType: "MatchPayload",
  });

  expect(mapping.getHandler({ payloadType: "MatchPayload" })).toEqual(mockHandler);
});
it("returns null when no match", () => {
  const mapping = new PayloadTypeHandlerMapping({
    handler: mockHandler,
    payloadType: "MatchPayload",
  });

  expect(mapping.getHandler({ payloadType: "DontMatchPayload" })).toEqual(null);
});
it("returns null no payloadType prop", () => {
  const mapping = new PayloadTypeHandlerMapping({
    handler: mockHandler,
    payloadType: "MatchPayload",
  });

  expect(mapping.getHandler({})).toEqual(null);
});
