import { MessageHandler } from "./MessageHandler";
import { Message } from "../messaging/Message";

export interface HandlerAdapter {
  supports(event: unknown): boolean;
  handle(event: unknown, handler: MessageHandler<Message<unknown>, unknown, unknown>): Promise<unknown>;
}
