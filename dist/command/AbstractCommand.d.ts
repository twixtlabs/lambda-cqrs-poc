import { Command } from "./Command";
export declare abstract class AbstractCommand implements Command {
    commandName: string;
    targetAggregateIdentifier?: string;
    targetAggregateVersion?: number;
}
