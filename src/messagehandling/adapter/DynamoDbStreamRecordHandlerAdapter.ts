import { HandlerAdapter } from "../HandlerAdapter";
import { DomainEventMessage, GenericDomainEventMessage } from "../../messaging";
import { MessageHandler } from "../MessageHandler";
import * as lambda from "aws-lambda";
import { Event } from "../../event";

/**
 * Adapter for handling records in dynamodb stream
 */
export class DynamoDbStreamRecordHandlerAdapter implements HandlerAdapter {
  supports(message: Record<string, unknown>): boolean {
    return (
      Object.prototype.hasOwnProperty.call(message, "aggregateIdentifier") &&
      Object.prototype.hasOwnProperty.call(message, "sequenceNumber") &&
      Object.prototype.hasOwnProperty.call(message, "payloadType") &&
      Object.prototype.hasOwnProperty.call(message, "payload")
    );
  }
  async handle(
    message: DomainEventMessage<Event>,
    handler: MessageHandler<DomainEventMessage<Event>, Event, void>,
  ): Promise<unknown> {
    return await handler.handleMessage(message);
  }
}
