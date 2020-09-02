import { GenericEventMessage } from "./GenericEventMessage";
import { DomainEventMessage } from "./DomainEventMessage";
import { Event } from "../event";
/**
 * Generic implementation of {@link DomainEventMessage}
 */
export declare class GenericDomainEventMessage<T extends Event> extends GenericEventMessage<T> implements DomainEventMessage<T> {
    readonly aggregateIdentifier: string;
    readonly sequenceNumber: number;
    readonly type: string;
    protected constructor(identifier: string, payloadType: string, type: string, payload: T, aggregateIdentifier: string, sequenceNumber: number, timestamp: number);
    static asDomainEventMessage<T extends Event>(type: string, payload: T, aggregateIdentifier: string, sequenceNumber: number): DomainEventMessage<T>;
}
