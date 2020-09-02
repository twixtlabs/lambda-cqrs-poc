import { HandlerAdapter } from "../HandlerAdapter";
import { CommandMessage } from "../../messaging";
import { MessageHandler } from "../MessageHandler";
import { Command } from "../../command";
export declare class CommandHandlerAdapter implements HandlerAdapter {
    supports(event: Record<string, unknown>): boolean;
    handle(message: CommandMessage<Command>, handler: MessageHandler<CommandMessage<Command>, Command, unknown>): Promise<unknown>;
}
