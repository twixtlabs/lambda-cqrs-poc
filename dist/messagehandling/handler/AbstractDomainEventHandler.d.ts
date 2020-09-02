import { DomainEventMessage } from "../../messaging";
import { Logger } from "../../logging";
import { Event } from "../..";
import { MessageHandler } from "../MessageHandler";
export declare abstract class AbstractDomainEventHandler<P extends Event> implements MessageHandler<DomainEventMessage<P>, P, void> {
    protected readonly LOG: Logger;
    protected constructor({ logger }: {
        logger: Logger;
    });
    abstract execute(event: P): Promise<void>;
    handleMessage(message: DomainEventMessage<P>): Promise<void>;
}
