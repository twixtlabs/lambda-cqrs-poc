import { MessageController } from "./MessageController";
import { Event } from "../../event";
import { DomainEventMessage } from "../../messaging/DomainEventMessage";
export interface DomainEventMessageController<P extends Event> extends MessageController<DomainEventMessage<P>, P, void> {
}
