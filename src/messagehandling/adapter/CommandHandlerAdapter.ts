import { HandlerAdapter } from "../HandlerAdapter";
import { CommandMessage } from "../../messaging";
import { MessageHandler } from "../MessageHandler";
import { Command } from "../../command";

export class CommandHandlerAdapter implements HandlerAdapter {
  supports(event: Record<string, unknown>): boolean {
    return (
      Object.prototype.hasOwnProperty.call(event, "payload") &&
      Object.prototype.hasOwnProperty.call(event.payload, "commandName")
    );
  }
  async handle(
    message: CommandMessage<Command>,
    handler: MessageHandler<CommandMessage<Command>, Command, unknown>,
  ): Promise<unknown> {
    return await handler.handleMessage(message);
  }
}
