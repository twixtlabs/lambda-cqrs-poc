import { Logger, LogMethodOpts } from "../Logger";

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
export class NoOpLoggerImpl implements Logger {
  debug(opts: LogMethodOpts): void {}

  error(opts: LogMethodOpts): void {}

  fatal(opts: LogMethodOpts): void {}

  info(opts: LogMethodOpts): void {}

  trace(opts: LogMethodOpts): void {}

  warn(opts: LogMethodOpts): void {}
}
