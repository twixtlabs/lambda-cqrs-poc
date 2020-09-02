import { EventMessage } from "./EventMessage";
/**
 * An {@link EventMessage} the wraps an event emitted/generated by an Aggregate.
 * It adds the identifier and type of the aggregate that emitted the message, and includes a sequence
 * number to allow messages to be sorted in the order in which they are generated (timestamp is not precise enough)
 */
export interface DomainEventMessage<T> extends EventMessage<T> {
    /**
     * allows of events generated by an aggregate to be sorted in the order
     * in which they were generated
     */
    readonly sequenceNumber: number;
    /**
     * identifier of the aggregate that generated the message
     */
    readonly aggregateIdentifier: string;
    /**
     * name/type of the aggregate root that generated the event.
     */
    readonly type: string;
}
