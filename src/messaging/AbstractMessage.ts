import { Message } from "./Message";

/**
 * Abstract base class for Messages/
 */
export abstract class AbstractMessage<T> implements Message<T> {
  /**
   * New message
   * @param identifier the message identifier
   * @param payloadType the payloadType
   * @param payload the payload
   * @protected
   */
  protected constructor(
    public readonly identifier: string,
    public readonly payloadType: string,
    public readonly payload: T,
  ) {}
}
