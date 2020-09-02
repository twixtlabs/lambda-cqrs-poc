import { LoggerService, LogMethodOpts } from "./LoggerService";
import * as Logger from "bunyan";
export declare class BunyanLoggerServiceImpl implements LoggerService {
    private readonly name;
    private readonly level;
    private readonly LOG;
    constructor({ name, level }: {
        name: string;
        level: Logger.LogLevel;
    });
    trace(opts: LogMethodOpts): void;
    debug(opts: LogMethodOpts): void;
    info(opts: LogMethodOpts): void;
    warn(opts: LogMethodOpts): void;
    error(opts: LogMethodOpts): void;
    fatal(opts: LogMethodOpts): void;
}
