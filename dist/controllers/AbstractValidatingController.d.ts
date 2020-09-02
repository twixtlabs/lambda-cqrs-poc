import { Controller } from "./Controller";
import { LoggerService } from "../logging/LoggerService";
import { PayloadValidator } from "../utils/PayloadValidator";
export declare abstract class AbstractValidatingController<P, R> implements Controller<P, R> {
    protected readonly LOG: LoggerService;
    private readonly validator;
    constructor({ logger, validator }: {
        logger: LoggerService;
        validator: PayloadValidator<P>;
    });
    /**
     * Validates the payload in calls execute on constroller subclass
     * @param payload
     * @throws InvalidPayloadError
     */
    invoke(payload: P): Promise<R>;
    abstract execute(payload: P): Promise<R>;
}
