import { Message } from "./Message";

/**
 * Representation of a {@link Message} wrapping an {@link Even}t as it's a payload.
 *
 */
export interface EventMessage<T> extends Message<T> {
  /**
   * timestamp, epoch ms. The time the event occurred
   *
   * Note: The time an events occurs should be when it is published/recorded/reported
   */
  // TODO event timestamp should be set on publish/save to event store.?
  readonly timestamp: number;
}
