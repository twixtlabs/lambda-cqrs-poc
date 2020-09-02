import { DomainEventMessage } from "../../messaging";
import { Logger } from "../../logging";

import { Event } from "../..";

import { MessageHandler } from "../MessageHandler";

export abstract class AbstractDomainEventHandler<P extends Event>
  implements MessageHandler<DomainEventMessage<P>, P, void> {
  protected readonly LOG: Logger;
  protected constructor({ logger }: { logger: Logger }) {
    this.LOG = logger;
  }

  abstract execute(event: P): Promise<void>;

  async handleMessage(message: DomainEventMessage<P>): Promise<void> {
    return await this.execute(message.payload);
  }
}
