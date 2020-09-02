import { Logger } from "./Logger";
export interface LoggerFactory {
    createLogger(name: string): Logger;
}
