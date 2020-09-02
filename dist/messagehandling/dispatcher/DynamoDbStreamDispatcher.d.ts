import * as lambda from "aws-lambda";
import { AbstractDispatcher } from "../AbstractDispatcher";
import { HandlerMapping } from "../HandlerMapping";
/**
 * Dispatcher implementation for when source event is DynamoDbStreamEvent
 */
export declare class DynamoDbStreamDispatcher extends AbstractDispatcher {
    constructor({ mappings }: {
        mappings: HandlerMapping[];
    });
    doDispatch(event: lambda.DynamoDBStreamEvent): Promise<void>;
}
