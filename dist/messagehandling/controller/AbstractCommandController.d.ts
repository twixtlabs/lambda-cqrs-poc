import { Command } from "../../command";
import { MessageController } from "./MessageController";
import { CommandMessage } from "../../messaging/CommandMessage";
import { CommandController } from "./CommandController";
import { Logger } from "../../logging";
import { CommandValidator } from "../../utils/CommandValidator";
export declare abstract class AbstractCommandController<P extends Command, R> implements CommandController<P, R>, MessageController<CommandMessage<P>, P, R> {
    protected readonly LOG: Logger;
    private readonly validator;
    private readonly handlesCommandName;
    protected constructor({ logger, validator, commandName, }: {
        logger: Logger;
        validator: CommandValidator<P>;
        commandName: string;
    });
    handleMessage(message: CommandMessage<P>): Promise<R>;
    abstract execute(command: P): Promise<R>;
    canHandle(message: CommandMessage<P>): boolean;
    protected preExecute(message: CommandMessage<P>): Promise<void>;
    protected postExecute(message: CommandMessage<P>, response: R): Promise<R>;
}
