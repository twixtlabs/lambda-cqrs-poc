import { Logger, LogMethodOpts } from "../Logger";
export declare class NoOpLoggerImpl implements Logger {
    debug(opts: LogMethodOpts): void;
    error(opts: LogMethodOpts): void;
    fatal(opts: LogMethodOpts): void;
    info(opts: LogMethodOpts): void;
    trace(opts: LogMethodOpts): void;
    warn(opts: LogMethodOpts): void;
}
