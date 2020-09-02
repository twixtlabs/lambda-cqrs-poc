/**
 * Handle for Command Messages.
 * dispatches and returns.
 */
import { CommandMessage } from "../messaging/CommandMessage";
import { MessageDispatcher } from "./Dispatcher";
import { Command } from "../command";
import { CommandMessageController } from "./controller/CommandMessageController";
declare type ControllerList = CommandMessageController<Command, unknown>[];
export declare class CommandMessageHandler {
    protected readonly dispatcher: MessageDispatcher;
    constructor({ controllers }: {
        controllers: ControllerList;
    });
    /**
     * Dispatch command message to dispatcher and return result
     * @param event source event is a CommandMessage
     */
    handle(event: CommandMessage<Command>): Promise<unknown>;
}
export {};
