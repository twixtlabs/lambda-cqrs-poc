import { GenericMessage } from "./GenericMessage";
import { CommandMessage } from "./CommandMessage";
import { Command } from "../command";
/**
 * Generic implementation of CommandMessage
 */
export declare class GenericCommandMessage<T extends Command> extends GenericMessage<T> implements CommandMessage<T> {
    protected constructor(identifier: string, payloadType: string, payload: T);
    static asCommandMessage<T extends Command>(payload: T): CommandMessage<T>;
    get commandName(): string;
}
