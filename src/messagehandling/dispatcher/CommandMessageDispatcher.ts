import { MissingCommandHandlerError } from "./MissingCommandHandlerError";
import { AbstractDispatcher } from "../AbstractDispatcher";
import { HandlerMapping } from "../HandlerMapping";
import { CommandHandlerAdapter } from "../adapter/CommandHandlerAdapter";
import { CommandMessage } from "../../messaging";
import { Command } from "../../command";

/**
 * Dispatcher implementation for command handlers where event is CommandMessage
 */
export class CommandMessageDispatcher extends AbstractDispatcher {
  constructor({ mappings }: { mappings: HandlerMapping[] }) {
    super({
      mappings,
      adapters: [new CommandHandlerAdapter()],
    });
  }
  async doDispatch(event: CommandMessage<Command>): Promise<unknown> {
    const adapter = this.getAdapter(event);
    const handler = this.getHandler(event);
    if (adapter && handler) {
      return await adapter.handle(event, handler);
    } else {
      throw new MissingCommandHandlerError();
    }
  }
}
