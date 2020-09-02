import { AbstractDispatcher } from "../AbstractDispatcher";
import { HandlerMapping } from "../HandlerMapping";
import { CommandMessage } from "../../messaging";
import { Command } from "../../command";
/**
 * Dispatcher implementation for command handlers where event is CommandMessage
 */
export declare class CommandMessageDispatcher extends AbstractDispatcher {
    constructor({ mappings }: {
        mappings: HandlerMapping[];
    });
    doDispatch(event: CommandMessage<Command>): Promise<unknown>;
}
