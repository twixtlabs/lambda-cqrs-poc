import { Command } from "../../command";
import { CommandMessage } from "../../messaging";
import { Logger } from "../../logging";

import { CommandValidator } from "../..";

import { MessageHandler } from "../MessageHandler";

export abstract class AbstractCommandHandler<P extends Command, R> implements MessageHandler<CommandMessage<P>, P, R> {
  protected readonly LOG: Logger;
  private readonly validator: CommandValidator<P>;

  protected constructor({ logger, validator }: { logger: Logger; validator: CommandValidator<P> }) {
    this.LOG = logger;
    this.validator = validator;
  }

  abstract execute(command: P): Promise<R>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  async preExecute(message: CommandMessage<P>): Promise<void> {}

  async postExecute(message: CommandMessage<P>, response: R): Promise<R> {
    return response;
  }
  async handleMessage(message: CommandMessage<P>): Promise<R> {
    await this.preExecute(message);
    const command = this.validator.transformAndValidate(message.payload);
    let response: R = await this.execute(command);
    response = await this.postExecute(message, response);
    return response;
  }
}
