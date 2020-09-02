import { v4 as uuid } from "uuid";

import { GenericEventMessage } from "./GenericEventMessage";
import { DomainEventMessage } from "./DomainEventMessage";
import { InvalidPayloadError } from "./InvalidPayloadError";
import { Event } from "../event";

/**
 * Generic implementation of {@link DomainEventMessage}
 */
export class GenericDomainEventMessage<T extends Event>
  extends GenericEventMessage<T>
  implements DomainEventMessage<T> {
  public readonly aggregateIdentifier: string;
  public readonly sequenceNumber: number;
  public readonly type: string;
  protected constructor(
    identifier: string,
    payloadType: string,
    type: string,
    payload: T,
    aggregateIdentifier: string,
    sequenceNumber: number,
    timestamp: number,
  ) {
    if (!payload.eventName) {
      throw new InvalidPayloadError(
        'Payload is missing required property "eventName". Events should implement Event interface',
      );
    }

    super(identifier, payload.eventName, payload, timestamp);
    this.type = type;
    this.aggregateIdentifier = aggregateIdentifier;
    this.sequenceNumber = sequenceNumber;
  }

  public static asDomainEventMessage<T extends Event>(
    type: string,
    payload: T,
    aggregateIdentifier: string,
    sequenceNumber: number,
  ): DomainEventMessage<T> {
    if (!payload.eventName) {
      throw new InvalidPayloadError(
        'Payload is missing required property "eventName". Events should implement Event interface',
      );
    }
    const now = Date.now();
    const identifier = uuid();
    return new this(identifier, payload.eventName, type, payload, aggregateIdentifier, sequenceNumber, now);
  }
}
