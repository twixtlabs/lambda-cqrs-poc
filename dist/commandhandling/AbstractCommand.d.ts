import { Command } from "./Command";
export declare abstract class AbstractCommand implements Command {
    commandName: string;
    targetAggregateVersion: number;
}
