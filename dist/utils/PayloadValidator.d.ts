import { ClassType } from "class-transformer-validator";
export declare class PayloadValidator<T> {
    private readonly targetClass;
    constructor(targetClass: ClassType<object>);
    transformAndValidate(source: T): T;
}
