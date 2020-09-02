import { MessageController } from "./MessageController";
import { CommandMessage } from "../../messaging/CommandMessage";
import { Command } from "../../command";
export interface CommandMessageController<P extends Command, R> extends MessageController<CommandMessage<P>, P, R> {
}
