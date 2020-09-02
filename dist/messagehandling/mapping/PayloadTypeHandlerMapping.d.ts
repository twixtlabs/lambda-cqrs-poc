import { HandlerMapping } from "../HandlerMapping";
import { MessageHandler } from "../MessageHandler";
import { Message } from "../../messaging/Message";
export declare class PayloadTypeHandlerMapping implements HandlerMapping {
    private readonly payloadType;
    private readonly handler;
    constructor({ payloadType, handler, }: {
        payloadType: string;
        handler: MessageHandler<Message<unknown>, unknown, unknown>;
    });
    getHandler(event: Record<string, unknown>): MessageHandler<Message<unknown>, unknown, unknown> | null;
}
