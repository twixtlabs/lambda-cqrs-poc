import { HandlerMapping } from "../HandlerMapping";
import { MessageHandler } from "../MessageHandler";
import { Message } from "../../messaging/Message";

export class PayloadTypeHandlerMapping implements HandlerMapping {
  private readonly payloadType: string;
  private readonly handler: MessageHandler<Message<unknown>, unknown, unknown>;
  constructor({
    payloadType,
    handler,
  }: {
    payloadType: string;
    handler: MessageHandler<Message<unknown>, unknown, unknown>;
  }) {
    this.payloadType = payloadType;
    this.handler = handler;
  }
  getHandler(event: Record<string, unknown>): MessageHandler<Message<unknown>, unknown, unknown> | null {
    if (event && this.payloadType === event.payloadType) {
      return this.handler;
    } else {
      return null;
    }
  }
}
