"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericMessage = void 0;
const AbstractMessage_1 = require("./AbstractMessage");
const uuid_1 = require("uuid");
/**
 * Generic implementation of {@link Message}
 */
class GenericMessage extends AbstractMessage_1.AbstractMessage {
    constructor(identifier, payloadType, payload) {
        super(identifier, payloadType, payload);
    }
    /**
     * Returns a message wrapping the given payload.
     * @param payloadType
     * @param payload
     */
    static asMessage(payloadType, payload) {
        const identifier = uuid_1.v4();
        return new this(identifier, payloadType, payload);
    }
}
exports.GenericMessage = GenericMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY01lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVzc2FnaW5nL0dlbmVyaWNNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFvRDtBQUdwRCwrQkFBa0M7QUFFbEM7O0dBRUc7QUFDSCxNQUFhLGNBQWtCLFNBQVEsaUNBQWtCO0lBQ3ZELFlBQXNCLFVBQWtCLEVBQUUsV0FBbUIsRUFBRSxPQUFVO1FBQ3ZFLEtBQUssQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBSSxXQUFtQixFQUFFLE9BQVU7UUFDeEQsTUFBTSxVQUFVLEdBQUcsU0FBSSxFQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRjtBQWRELHdDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RNZXNzYWdlIH0gZnJvbSBcIi4vQWJzdHJhY3RNZXNzYWdlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSBcInV1aWRcIjtcblxuLyoqXG4gKiBHZW5lcmljIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBNZXNzYWdlfVxuICovXG5leHBvcnQgY2xhc3MgR2VuZXJpY01lc3NhZ2U8VD4gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2U8VD4ge1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBwYXlsb2FkVHlwZTogc3RyaW5nLCBwYXlsb2FkOiBUKSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgcGF5bG9hZFR5cGUsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtZXNzYWdlIHdyYXBwaW5nIHRoZSBnaXZlbiBwYXlsb2FkLlxuICAgKiBAcGFyYW0gcGF5bG9hZFR5cGVcbiAgICogQHBhcmFtIHBheWxvYWRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXNNZXNzYWdlPFQ+KHBheWxvYWRUeXBlOiBzdHJpbmcsIHBheWxvYWQ6IFQpOiBNZXNzYWdlPFQ+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdXVpZCgpO1xuICAgIHJldHVybiBuZXcgdGhpcyhpZGVudGlmaWVyLCBwYXlsb2FkVHlwZSwgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==