import { ClassType } from "class-transformer-validator";
/**
 * Transform plain js/json object to class and perform static validation using
 * class-transformer and class-validator packages
 */
export declare class CommandValidator<T> {
    private readonly targetClass;
    constructor(targetClass: ClassType<object>);
    transformAndValidate(source: T): T;
}
