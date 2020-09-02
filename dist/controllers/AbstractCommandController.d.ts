import { AbstractValidatingController } from "./AbstractValidatingController";
import { Command } from "../commandhandling/Command";
export declare abstract class AbstractCommandController<P extends Command, R> extends AbstractValidatingController<P, R> {
    abstract execute(command: P): Promise<R>;
}
