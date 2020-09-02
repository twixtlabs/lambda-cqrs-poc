import { LoggerFactory } from "../LoggerFactory";
import * as Logger from "bunyan";
import { Logger as LoggerInterface } from "../Logger";
import { BunyanLoggerImpl } from "./BunyanLoggerImpl";

export class BunyanLoggerFactory implements LoggerFactory {
  createLogger(name: string): LoggerInterface {
    return new BunyanLoggerImpl({
      name,
      level: (process.env.LOG_LEVEL as Logger.LogLevel) || Logger.INFO,
    });
  }
}
