import { EventMessage } from "./EventMessage";

import { v4 as uuid } from "uuid";
import { GenericMessage } from "./GenericMessage";
import { InvalidPayloadError } from "./InvalidPayloadError";
import { Event } from "../event";

/**
 * Generic implementation of Event Message
 */
export class GenericEventMessage<T extends Event> extends GenericMessage<T> implements EventMessage<T> {
  public readonly timestamp: number;
  protected constructor(identifier: string, payloadType: string, payload: T, timestamp: number) {
    super(identifier, payloadType, payload);
    this.timestamp = timestamp;
  }
  public static asEventMessage<T extends Event>(payload: T): EventMessage<T> {
    if (!payload.eventName) {
      throw new InvalidPayloadError(
        'Payload is missing required property "eventName". Events should implement Event interface',
      );
    }
    const now = Date.now();
    const identifier = uuid();
    return new this(identifier, payload.eventName, payload, now);
  }
}
