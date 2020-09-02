import { ClassType, transformAndValidateSync } from "class-transformer-validator";
import { CommandValidationError } from "./CommandValidationError";
import { ValidationError } from "class-validator";

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Transform plain js/json object to class and perform static validation using
 * class-transformer and class-validator packages
 */
export class CommandValidator<T> {
  public constructor(private readonly targetClass: ClassType<object>) {}

  public transformAndValidate(source: T): T {
    const body = (source as unknown) as object;
    try {
      return (transformAndValidateSync(this.targetClass, body) as unknown) as T;
    } catch (error) {
      if (Array.isArray(error) && error.length > 0 && error[0] instanceof ValidationError) {
        const commandValidationError = new CommandValidationError();
        error.forEach((validationError) => {
          commandValidationError.add({
            property: validationError.property,
            value: validationError.value,
            constraints: validationError.constraints,
          });
        });
        throw commandValidationError;
      } else {
        throw error;
      }
    }
  }
}
