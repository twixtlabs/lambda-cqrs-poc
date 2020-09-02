"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractValidatingController = void 0;
class AbstractValidatingController {
    constructor({ logger, validator }) {
        this.LOG = logger;
        this.validator = validator;
    }
    /**
     * Validates the payload in calls execute on constroller subclass
     * @param payload
     * @throws InvalidPayloadError
     */
    async invoke(payload) {
        const transformedPayload = this.validator.transformAndValidate(payload);
        const result = await this.execute(transformedPayload);
        return result;
    }
}
exports.AbstractValidatingController = AbstractValidatingController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RWYWxpZGF0aW5nQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9BYnN0cmFjdFZhbGlkYXRpbmdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQXNCLDRCQUE0QjtJQUdoRCxZQUFtQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQTZEO1FBQ2pHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFVO1FBQzVCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBR0Y7QUFwQkQsb0VBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tIFwiLi4vbG9nZ2luZy9Mb2dnZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYXlsb2FkVmFsaWRhdG9yIH0gZnJvbSBcIi4uL3V0aWxzL1BheWxvYWRWYWxpZGF0b3JcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmFsaWRhdGluZ0NvbnRyb2xsZXI8UCwgUj4gaW1wbGVtZW50cyBDb250cm9sbGVyPFAsIFI+IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IExPRzogTG9nZ2VyU2VydmljZTtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWxpZGF0b3I6IFBheWxvYWRWYWxpZGF0b3I8UD47XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih7IGxvZ2dlciwgdmFsaWRhdG9yIH06IHsgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlOyB2YWxpZGF0b3I6IFBheWxvYWRWYWxpZGF0b3I8UD4gfSkge1xuICAgIHRoaXMuTE9HID0gbG9nZ2VyO1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgcGF5bG9hZCBpbiBjYWxscyBleGVjdXRlIG9uIGNvbnN0cm9sbGVyIHN1YmNsYXNzXG4gICAqIEBwYXJhbSBwYXlsb2FkXG4gICAqIEB0aHJvd3MgSW52YWxpZFBheWxvYWRFcnJvclxuICAgKi9cbiAgcHVibGljIGFzeW5jIGludm9rZShwYXlsb2FkOiBQKTogUHJvbWlzZTxSPiB7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRQYXlsb2FkID0gdGhpcy52YWxpZGF0b3IudHJhbnNmb3JtQW5kVmFsaWRhdGUocGF5bG9hZCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5leGVjdXRlKHRyYW5zZm9ybWVkUGF5bG9hZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFic3RyYWN0IGV4ZWN1dGUocGF5bG9hZDogUCk6IFByb21pc2U8Uj47XG59XG4iXX0=