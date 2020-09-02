/**
 * Interface to be implemented by objects that define a mapping between messages(events) and handlers
 *
 *
 */
import { MessageHandler } from "./MessageHandler";
import { Message } from "../messaging/Message";
export interface HandlerMapping {
    /**
     * Return a Handler for the event. Selection may be made on any content
     * within the event that the implementing class chooses.
     * @param event
     */
    getHandler(event: unknown): MessageHandler<Message<unknown>, unknown, unknown> | null;
}
