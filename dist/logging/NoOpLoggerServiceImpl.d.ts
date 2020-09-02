import { LoggerService, LogMethodOpts } from "./LoggerService";
export declare class NoOpLoggerServiceImpl implements LoggerService {
    debug(opts: LogMethodOpts): void;
    error(opts: LogMethodOpts): void;
    fatal(opts: LogMethodOpts): void;
    info(opts: LogMethodOpts): void;
    trace(opts: LogMethodOpts): void;
    warn(opts: LogMethodOpts): void;
}
