export interface LogMethodOpts {
  message: string;
  error?: Error;
  data?: Record<string, unknown>;
}
export interface Logger {
  trace(opts: LogMethodOpts): void;
  debug(opts: LogMethodOpts): void;
  info(opts: LogMethodOpts): void;
  warn(opts: LogMethodOpts): void;
  error(opts: LogMethodOpts): void;
  fatal(opts: LogMethodOpts): void;
}
