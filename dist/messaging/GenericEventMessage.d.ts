import { EventMessage } from "./EventMessage";
import { GenericMessage } from "./GenericMessage";
import { Event } from "../event";
/**
 * Generic implementation of Event Message
 */
export declare class GenericEventMessage<T extends Event> extends GenericMessage<T> implements EventMessage<T> {
    readonly timestamp: number;
    protected constructor(identifier: string, payloadType: string, payload: T, timestamp: number);
    static asEventMessage<T extends Event>(payload: T): EventMessage<T>;
}
