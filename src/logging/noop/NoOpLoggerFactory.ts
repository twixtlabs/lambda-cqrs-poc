import { LoggerFactory } from "../LoggerFactory";

import { Logger } from "../Logger";
import { NoOpLoggerImpl } from "./NoOpLoggerImpl";

export class NoOpLoggerFactory implements LoggerFactory {
  createLogger(): Logger {
    return new NoOpLoggerImpl();
  }
}
