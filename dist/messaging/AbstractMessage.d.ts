import { Message } from "./Message";
/**
 * Abstract base class for Messages/
 */
export declare abstract class AbstractMessage<T> implements Message<T> {
    readonly identifier: string;
    readonly payloadType: string;
    readonly payload: T;
    /**
     * New message
     * @param identifier the message identifier
     * @param payloadType the payloadType
     * @param payload the payload
     * @protected
     */
    protected constructor(identifier: string, payloadType: string, payload: T);
}
