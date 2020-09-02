import { Command } from "../../command";
import { CommandMessage } from "../../messaging";
import { Logger } from "../../logging";
import { CommandValidator } from "../..";
import { MessageHandler } from "../MessageHandler";
export declare abstract class AbstractCommandHandler<P extends Command, R> implements MessageHandler<CommandMessage<P>, P, R> {
    protected readonly LOG: Logger;
    private readonly validator;
    protected constructor({ logger, validator }: {
        logger: Logger;
        validator: CommandValidator<P>;
    });
    abstract execute(command: P): Promise<R>;
    preExecute(message: CommandMessage<P>): Promise<void>;
    postExecute(message: CommandMessage<P>, response: R): Promise<R>;
    handleMessage(message: CommandMessage<P>): Promise<R>;
}
