import { AbstractMessage } from "./AbstractMessage";
import { Message } from "./Message";

import { v4 as uuid } from "uuid";

/**
 * Generic implementation of {@link Message}
 */
export class GenericMessage<T> extends AbstractMessage<T> {
  protected constructor(identifier: string, payloadType: string, payload: T) {
    super(identifier, payloadType, payload);
  }

  /**
   * Returns a message wrapping the given payload.
   * @param payloadType
   * @param payload
   */
  public static asMessage<T>(payloadType: string, payload: T): Message<T> {
    const identifier = uuid();
    return new this(identifier, payloadType, payload);
  }
}
