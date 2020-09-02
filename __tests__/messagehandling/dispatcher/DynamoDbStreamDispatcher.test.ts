import { DynamoDbStreamDispatcher } from "../../../src/messagehandling/dispatcher/DynamoDbStreamDispatcher";
import { MessageHandler } from "../../../src/messagehandling/MessageHandler";
import { Message } from "../../../src/messaging/Message";
import { PayloadTypeHandlerMapping } from "../../../src/messagehandling/mapping/PayloadTypeHandlerMapping";
import * as lambda from "aws-lambda";

const mockHandlerOne: MessageHandler<Message<unknown>, unknown, unknown> = {
  handleMessage: jest.fn(),
};

beforeEach(() => {
  jest.resetAllMocks();
});

it("does ignores records with no matching handler", async () => {
  const dispatcher = new DynamoDbStreamDispatcher({
    mappings: [new PayloadTypeHandlerMapping({ payloadType: "MatchPayload", handler: mockHandlerOne })],
  });

  const streamEvent: lambda.DynamoDBStreamEvent = {
    Records: [
      {
        eventName: "INSERT",
        dynamodb: {
          NewImage: {
            payloadType: {
              S: "NonMatchingPayload",
            },
            aggregateIdentifier: {
              S: "",
            },
            sequenceNumber: {
              N: "0",
            },
            payload: {
              L: [{ M: {} }],
            },
          },
        },
      },
    ],
  };
  await expect(dispatcher.doDispatch(streamEvent)).resolves.toBeUndefined();
  expect(mockHandlerOne.handleMessage).not.toHaveBeenCalled();
});

it("handles only matching insert records", async () => {
  const dispatcher = new DynamoDbStreamDispatcher({
    mappings: [new PayloadTypeHandlerMapping({ payloadType: "MatchPayload", handler: mockHandlerOne })],
  });

  const streamEvent: lambda.DynamoDBStreamEvent = {
    Records: [
      {
        eventName: "INSERT",
        dynamodb: {
          NewImage: {
            payloadType: {
              S: "MatchPayload",
            },
            aggregateIdentifier: {
              S: "",
            },
            sequenceNumber: {
              N: "0",
            },
            payload: {
              L: [{ M: {} }],
            },
          },
        },
      },
      {
        eventName: "REMOVE",
        dynamodb: {
          NewImage: {
            payloadType: {
              S: "MatchPayload",
            },
            aggregateIdentifier: {
              S: "",
            },
            sequenceNumber: {
              N: "0",
            },
            payload: {
              L: [{ M: {} }],
            },
          },
        },
      },
      {
        eventName: "INSERT",
        dynamodb: {
          NewImage: {
            payloadType: {
              S: "MatchPayload",
            },
            aggregateIdentifier: {
              S: "",
            },
            sequenceNumber: {
              N: "0",
            },
            payload: {
              L: [{ M: {} }],
            },
          },
        },
      },
      {
        eventName: "REMOVE",
        dynamodb: {
          NewImage: {
            payloadType: {
              S: "MatchPayload",
            },
            aggregateIdentifier: {
              S: "",
            },
            sequenceNumber: {
              N: "0",
            },
            payload: {
              L: [{ M: {} }],
            },
          },
        },
      },
    ],
  };
  await expect(dispatcher.doDispatch(streamEvent)).resolves.toBeUndefined();
  expect(mockHandlerOne.handleMessage).toHaveBeenCalledTimes(2);
});
