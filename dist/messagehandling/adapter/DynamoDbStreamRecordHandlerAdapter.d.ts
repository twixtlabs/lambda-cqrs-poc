import { HandlerAdapter } from "../HandlerAdapter";
import { DomainEventMessage } from "../../messaging";
import { MessageHandler } from "../MessageHandler";
import { Event } from "../../event";
/**
 * Adapter for handling records in dynamodb stream
 */
export declare class DynamoDbStreamRecordHandlerAdapter implements HandlerAdapter {
    supports(message: Record<string, unknown>): boolean;
    handle(message: DomainEventMessage<Event>, handler: MessageHandler<DomainEventMessage<Event>, Event, void>): Promise<unknown>;
}
