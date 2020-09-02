"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandValidator = void 0;
const class_transformer_validator_1 = require("class-transformer-validator");
const CommandValidationError_1 = require("./CommandValidationError");
const class_validator_1 = require("class-validator");
/* eslint-disable @typescript-eslint/ban-types */
/**
 * Transform plain js/json object to class and perform static validation using
 * class-transformer and class-validator packages
 */
class CommandValidator {
    constructor(targetClass) {
        this.targetClass = targetClass;
    }
    transformAndValidate(source) {
        const body = source;
        try {
            return class_transformer_validator_1.transformAndValidateSync(this.targetClass, body);
        }
        catch (error) {
            if (Array.isArray(error) && error.length > 0 && error[0] instanceof class_validator_1.ValidationError) {
                const commandValidationError = new CommandValidationError_1.CommandValidationError();
                error.forEach((validationError) => {
                    commandValidationError.add({
                        property: validationError.property,
                        value: validationError.value,
                        constraints: validationError.constraints,
                    });
                });
                throw commandValidationError;
            }
            else {
                throw error;
            }
        }
    }
}
exports.CommandValidator = CommandValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9Db21tYW5kVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZFQUFrRjtBQUNsRixxRUFBa0U7QUFDbEUscURBQWtEO0FBRWxELGlEQUFpRDtBQUNqRDs7O0dBR0c7QUFDSCxNQUFhLGdCQUFnQjtJQUMzQixZQUFvQyxXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFBRyxDQUFDO0lBRS9ELG9CQUFvQixDQUFDLE1BQVM7UUFDbkMsTUFBTSxJQUFJLEdBQUksTUFBNEIsQ0FBQztRQUMzQyxJQUFJO1lBQ0YsT0FBUSxzREFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBa0IsQ0FBQztTQUMzRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxpQ0FBZSxFQUFFO2dCQUNuRixNQUFNLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztnQkFDNUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO29CQUNoQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUM7d0JBQ3pCLFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUTt3QkFDbEMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLO3dCQUM1QixXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNLHNCQUFzQixDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLE1BQU0sS0FBSyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7Q0FDRjtBQXZCRCw0Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc1R5cGUsIHRyYW5zZm9ybUFuZFZhbGlkYXRlU3luYyB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lci12YWxpZGF0b3JcIjtcbmltcG9ydCB7IENvbW1hbmRWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiLi9Db21tYW5kVmFsaWRhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3IgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cbi8qKlxuICogVHJhbnNmb3JtIHBsYWluIGpzL2pzb24gb2JqZWN0IHRvIGNsYXNzIGFuZCBwZXJmb3JtIHN0YXRpYyB2YWxpZGF0aW9uIHVzaW5nXG4gKiBjbGFzcy10cmFuc2Zvcm1lciBhbmQgY2xhc3MtdmFsaWRhdG9yIHBhY2thZ2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21tYW5kVmFsaWRhdG9yPFQ+IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGFyZ2V0Q2xhc3M6IENsYXNzVHlwZTxvYmplY3Q+KSB7fVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm1BbmRWYWxpZGF0ZShzb3VyY2U6IFQpOiBUIHtcbiAgICBjb25zdCBib2R5ID0gKHNvdXJjZSBhcyB1bmtub3duKSBhcyBvYmplY3Q7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAodHJhbnNmb3JtQW5kVmFsaWRhdGVTeW5jKHRoaXMudGFyZ2V0Q2xhc3MsIGJvZHkpIGFzIHVua25vd24pIGFzIFQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGVycm9yKSAmJiBlcnJvci5sZW5ndGggPiAwICYmIGVycm9yWzBdIGluc3RhbmNlb2YgVmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRWYWxpZGF0aW9uRXJyb3IgPSBuZXcgQ29tbWFuZFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgICBlcnJvci5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpID0+IHtcbiAgICAgICAgICBjb21tYW5kVmFsaWRhdGlvbkVycm9yLmFkZCh7XG4gICAgICAgICAgICBwcm9wZXJ0eTogdmFsaWRhdGlvbkVycm9yLnByb3BlcnR5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbGlkYXRpb25FcnJvci52YWx1ZSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiB2YWxpZGF0aW9uRXJyb3IuY29uc3RyYWludHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBjb21tYW5kVmFsaWRhdGlvbkVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=