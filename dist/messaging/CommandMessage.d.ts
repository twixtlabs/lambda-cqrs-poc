import { Message } from "./Message";
import { Command } from "../command";
/**
 * Representation of a {@link Message}  carraying a {@link Command} as it's payload
 *
 */
export interface CommandMessage<T extends Command> extends Message<T> {
    readonly commandName: string;
}
