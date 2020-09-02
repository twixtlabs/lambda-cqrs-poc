import { HandlerMapping } from "./HandlerMapping";
import { HandlerAdapter } from "./HandlerAdapter";
import { Dispatcher } from "./Dispatcher";
import { MessageHandler } from "./MessageHandler";
import { Message } from "../messaging/Message";

export abstract class AbstractDispatcher implements Dispatcher {
  protected readonly adapters: HandlerAdapter[];
  protected readonly mappings: HandlerMapping[];
  protected constructor({ adapters, mappings }: { adapters: HandlerAdapter[]; mappings: HandlerMapping[] }) {
    this.adapters = adapters;
    this.mappings = mappings;
  }

  protected getHandler(item: unknown): MessageHandler<Message<unknown>, unknown, unknown> | null {
    const mapping = this.mappings.find((mapping) => {
      return !!mapping.getHandler(item);
    });
    if (mapping) {
      return mapping.getHandler(item);
    } else {
      return null;
    }
  }
  protected getAdapter(item: unknown): HandlerAdapter | null {
    const adapter = this.adapters.find((adapter) => {
      return adapter.supports(item);
    });
    return adapter ? adapter : null;
  }
  abstract doDispatch(event: unknown): Promise<unknown>;
}
