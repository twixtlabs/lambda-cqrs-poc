import { Logger, LogMethodOpts } from "../Logger";
import * as Bunyan from "bunyan";
export declare class BunyanLoggerImpl implements Logger {
    private readonly name;
    private readonly level;
    private readonly LOG;
    constructor({ name, level }: {
        name: string;
        level: Bunyan.LogLevel;
    });
    trace(opts: LogMethodOpts): void;
    debug(opts: LogMethodOpts): void;
    info(opts: LogMethodOpts): void;
    warn(opts: LogMethodOpts): void;
    error(opts: LogMethodOpts): void;
    fatal(opts: LogMethodOpts): void;
}
