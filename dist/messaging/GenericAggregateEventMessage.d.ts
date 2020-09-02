import { GenericEventMessage } from "./GenericEventMessage";
import { AggregateEventMessage } from "./AggregateEventMessage";
/**
 * Generic implementation of {@link AggregateEventMessage}
 */
export declare class GenericAggregateEventMessage<T> extends GenericEventMessage<T> implements AggregateEventMessage<T> {
    readonly aggregateIdentifier: string;
    readonly sequenceNumber: number;
    readonly type: string;
    constructor(type: string, payloadType: string, payload: T, aggregateIdentifier: string, sequenceNumber: number);
}
