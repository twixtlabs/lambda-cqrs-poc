import { AbstractMessage } from "./AbstractMessage";
import { Message } from "./Message";
/**
 * Generic implementation of {@link Message}
 */
export declare class GenericMessage<T> extends AbstractMessage<T> {
    protected constructor(identifier: string, payloadType: string, payload: T);
    /**
     * Returns a message wrapping the given payload.
     * @param payloadType
     * @param payload
     */
    static asMessage<T>(payloadType: string, payload: T): Message<T>;
}
