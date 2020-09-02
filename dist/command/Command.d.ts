export interface Command {
    commandName: string;
    targetAggregateIdentifier?: string;
    targetAggregateVersion?: number;
}
