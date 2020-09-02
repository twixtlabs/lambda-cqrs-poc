import { Command } from "../../command";
export interface CommandController<P extends Command, R> {
    execute(command: P): Promise<R>;
}
