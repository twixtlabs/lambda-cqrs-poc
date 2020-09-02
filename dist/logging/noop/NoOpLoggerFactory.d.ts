import { LoggerFactory } from "../LoggerFactory";
import { Logger } from "../Logger";
export declare class NoOpLoggerFactory implements LoggerFactory {
    createLogger(): Logger;
}
