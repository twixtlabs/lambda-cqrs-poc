import { HandlerMapping } from "./HandlerMapping";
import { HandlerAdapter } from "./HandlerAdapter";
import { Dispatcher } from "./Dispatcher";
import { MessageHandler } from "./MessageHandler";
import { Message } from "../messaging/Message";
export declare abstract class AbstractDispatcher implements Dispatcher {
    protected readonly adapters: HandlerAdapter[];
    protected readonly mappings: HandlerMapping[];
    protected constructor({ adapters, mappings }: {
        adapters: HandlerAdapter[];
        mappings: HandlerMapping[];
    });
    protected getHandler(item: unknown): MessageHandler<Message<unknown>, unknown, unknown> | null;
    protected getAdapter(item: unknown): HandlerAdapter | null;
    abstract doDispatch(event: unknown): Promise<unknown>;
}
