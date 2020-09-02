import { LoggerFactory } from "../LoggerFactory";
import { Logger as LoggerInterface } from "../Logger";
export declare class BunyanLoggerFactory implements LoggerFactory {
    createLogger(name: string): LoggerInterface;
}
