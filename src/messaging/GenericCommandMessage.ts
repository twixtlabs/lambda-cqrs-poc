import { v4 as uuid } from "uuid";
import { GenericMessage } from "./GenericMessage";
import { CommandMessage } from "./CommandMessage";
import { Command } from "../command";
import { InvalidPayloadError } from "./InvalidPayloadError";

/**
 * Generic implementation of CommandMessage
 */
export class GenericCommandMessage<T extends Command> extends GenericMessage<T> implements CommandMessage<T> {
  protected constructor(identifier: string, payloadType: string, payload: T) {
    super(identifier, payloadType, payload);
  }
  public static asCommandMessage<T extends Command>(payload: T): CommandMessage<T> {
    if (!payload.commandName) {
      throw new InvalidPayloadError(
        'Payload is missing required property "commandName". Commands should implement Command interface',
      );
    }

    const identifier = uuid();
    return new this(identifier, payload.commandName, payload);
  }
  get commandName(): string {
    return this.payload.commandName;
  }
}
