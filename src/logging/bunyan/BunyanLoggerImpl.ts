import { Logger, LogMethodOpts } from "../Logger";
import * as Bunyan from "bunyan";

export class BunyanLoggerImpl implements Logger {
  private readonly name: string;
  private readonly level: Bunyan.LogLevel;
  private readonly LOG: Bunyan;
  constructor({ name, level }: { name: string; level: Bunyan.LogLevel }) {
    this.name = name;
    this.level = level;
    this.LOG = Bunyan.createLogger({
      name: this.name,
      level: this.level,
      serializers: {
        ...Bunyan.stdSerializers,
        // gatewayEvent: gatewayEventSerializer,
      },
    });
  }

  trace(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.trace({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.trace(opts.message);
    }
  }
  debug(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.debug({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.debug(opts.message);
    }
  }
  info(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.info({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.info(opts.message);
    }
  }

  warn(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.warn({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.warn(opts.message);
    }
  }
  error(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.error({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.error(opts.message);
    }
  }
  fatal(opts: LogMethodOpts): void {
    if (opts.error) {
      this.LOG.fatal({ err: opts.error, ...opts.data }, opts.message);
    } else {
      this.LOG.fatal(opts.message);
    }
  }
}
