import { Message } from "../../messaging/Message";
export interface MessageController<M extends Message<P>, P, R> {
    handleMessage(message: M): Promise<R>;
    canHandle(message: M): boolean;
}
