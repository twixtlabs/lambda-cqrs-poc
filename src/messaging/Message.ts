/**
 * A Message, payload container
 */
export interface Message<T> {
  /**
   * Identifier of the message
   */
  readonly identifier: string;
  /**
   * Payload of the message
   */
  readonly payload: T;
  /**
   * Payload Type
   */
  readonly payloadType: string;
}
