import { Message } from "../messaging/Message";

export interface MessageHandler<M extends Message<P>, P, R> {
  handleMessage(message: M): Promise<R>;
  //canHandle(message: M): boolean;
}
