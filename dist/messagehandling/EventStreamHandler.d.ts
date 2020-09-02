import { MessageDispatcher } from "./Dispatcher";
import { DomainEventMessageController } from "./controller/DomainEventMessageController";
import { Event } from "../event";
import * as lambda from "aws-lambda";
import { LoggerFactory } from "../logging/LoggerFactory";
declare type ControllerList = DomainEventMessageController<Event>[];
export declare class EventStreamHandler {
    protected readonly dispatcher: MessageDispatcher;
    protected readonly loggerFactory: LoggerFactory;
    constructor({ loggerFactory, controllers }: {
        loggerFactory: LoggerFactory;
        controllers: ControllerList;
    });
    /**
     * Dispatch each record to dispatcher
     * @param event source event is a CommandMessage
     */
    handle(event: lambda.DynamoDBStreamEvent): Promise<void>;
}
export {};
