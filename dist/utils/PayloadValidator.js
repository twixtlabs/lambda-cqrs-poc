"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadValidator = void 0;
const class_transformer_validator_1 = require("class-transformer-validator");
const InvalidPayloadError_1 = require("../controllers/InvalidPayloadError");
const class_validator_1 = require("class-validator");
/* eslint-disable @typescript-eslint/ban-types */
class PayloadValidator {
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
                const invalidPayloadError = new InvalidPayloadError_1.InvalidPayloadError();
                error.forEach((validationError) => {
                    invalidPayloadError.add({
                        property: validationError.property,
                        value: validationError.value,
                        constraints: validationError.constraints,
                    });
                });
                throw invalidPayloadError;
            }
            else {
                throw error;
            }
        }
    }
}
exports.PayloadValidator = PayloadValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bG9hZFZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9QYXlsb2FkVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZFQUFrRjtBQUNsRiw0RUFBeUU7QUFDekUscURBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCxNQUFhLGdCQUFnQjtJQUMzQixZQUFvQyxXQUE4QjtRQUE5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFBRyxDQUFDO0lBRS9ELG9CQUFvQixDQUFDLE1BQVM7UUFDbkMsTUFBTSxJQUFJLEdBQUksTUFBNEIsQ0FBQztRQUMzQyxJQUFJO1lBQ0YsT0FBUSxzREFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBa0IsQ0FBQztTQUMzRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxpQ0FBZSxFQUFFO2dCQUNuRixNQUFNLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztnQkFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO29CQUNoQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUM7d0JBQ3RCLFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUTt3QkFDbEMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLO3dCQUM1QixXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNLG1CQUFtQixDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLE1BQU0sS0FBSyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7Q0FDRjtBQXZCRCw0Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc1R5cGUsIHRyYW5zZm9ybUFuZFZhbGlkYXRlU3luYyB9IGZyb20gXCJjbGFzcy10cmFuc2Zvcm1lci12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEludmFsaWRQYXlsb2FkRXJyb3IgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvSW52YWxpZFBheWxvYWRFcnJvclwiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuZXhwb3J0IGNsYXNzIFBheWxvYWRWYWxpZGF0b3I8VD4ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0YXJnZXRDbGFzczogQ2xhc3NUeXBlPG9iamVjdD4pIHt9XG5cbiAgcHVibGljIHRyYW5zZm9ybUFuZFZhbGlkYXRlKHNvdXJjZTogVCk6IFQge1xuICAgIGNvbnN0IGJvZHkgPSAoc291cmNlIGFzIHVua25vd24pIGFzIG9iamVjdDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICh0cmFuc2Zvcm1BbmRWYWxpZGF0ZVN5bmModGhpcy50YXJnZXRDbGFzcywgYm9keSkgYXMgdW5rbm93bikgYXMgVDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXJyb3IpICYmIGVycm9yLmxlbmd0aCA+IDAgJiYgZXJyb3JbMF0gaW5zdGFuY2VvZiBWYWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZFBheWxvYWRFcnJvciA9IG5ldyBJbnZhbGlkUGF5bG9hZEVycm9yKCk7XG4gICAgICAgIGVycm9yLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcikgPT4ge1xuICAgICAgICAgIGludmFsaWRQYXlsb2FkRXJyb3IuYWRkKHtcbiAgICAgICAgICAgIHByb3BlcnR5OiB2YWxpZGF0aW9uRXJyb3IucHJvcGVydHksXG4gICAgICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkVycm9yLnZhbHVlLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IHZhbGlkYXRpb25FcnJvci5jb25zdHJhaW50cyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IGludmFsaWRQYXlsb2FkRXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==