"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericEventMessage = void 0;
const uuid_1 = require("uuid");
const GenericMessage_1 = require("./GenericMessage");
const InvalidPayloadError_1 = require("./InvalidPayloadError");
/**
 * Generic implementation of Event Message
 */
class GenericEventMessage extends GenericMessage_1.GenericMessage {
    constructor(identifier, payloadType, payload, timestamp) {
        super(identifier, payloadType, payload);
        this.timestamp = timestamp;
    }
    static asEventMessage(payload) {
        if (!payload.eventName) {
            throw new InvalidPayloadError_1.InvalidPayloadError('Payload is missing required property "eventName". Events should implement Event interface');
        }
        const now = Date.now();
        const identifier = uuid_1.v4();
        return new this(identifier, payload.eventName, payload, now);
    }
}
exports.GenericEventMessage = GenericEventMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0V2ZW50TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXNzYWdpbmcvR2VuZXJpY0V2ZW50TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwrQkFBa0M7QUFDbEMscURBQWtEO0FBQ2xELCtEQUE0RDtBQUc1RDs7R0FFRztBQUNILE1BQWEsbUJBQXFDLFNBQVEsK0JBQWlCO0lBRXpFLFlBQXNCLFVBQWtCLEVBQUUsV0FBbUIsRUFBRSxPQUFVLEVBQUUsU0FBaUI7UUFDMUYsS0FBSyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUNNLE1BQU0sQ0FBQyxjQUFjLENBQWtCLE9BQVU7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxJQUFJLHlDQUFtQixDQUMzQiwyRkFBMkYsQ0FDNUYsQ0FBQztTQUNIO1FBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sVUFBVSxHQUFHLFNBQUksRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQWhCRCxrREFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi9FdmVudE1lc3NhZ2VcIjtcblxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBHZW5lcmljTWVzc2FnZSB9IGZyb20gXCIuL0dlbmVyaWNNZXNzYWdlXCI7XG5pbXBvcnQgeyBJbnZhbGlkUGF5bG9hZEVycm9yIH0gZnJvbSBcIi4vSW52YWxpZFBheWxvYWRFcnJvclwiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vZXZlbnRcIjtcblxuLyoqXG4gKiBHZW5lcmljIGltcGxlbWVudGF0aW9uIG9mIEV2ZW50IE1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNFdmVudE1lc3NhZ2U8VCBleHRlbmRzIEV2ZW50PiBleHRlbmRzIEdlbmVyaWNNZXNzYWdlPFQ+IGltcGxlbWVudHMgRXZlbnRNZXNzYWdlPFQ+IHtcbiAgcHVibGljIHJlYWRvbmx5IHRpbWVzdGFtcDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBwYXlsb2FkVHlwZTogc3RyaW5nLCBwYXlsb2FkOiBULCB0aW1lc3RhbXA6IG51bWJlcikge1xuICAgIHN1cGVyKGlkZW50aWZpZXIsIHBheWxvYWRUeXBlLCBwYXlsb2FkKTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGFzRXZlbnRNZXNzYWdlPFQgZXh0ZW5kcyBFdmVudD4ocGF5bG9hZDogVCk6IEV2ZW50TWVzc2FnZTxUPiB7XG4gICAgaWYgKCFwYXlsb2FkLmV2ZW50TmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXlsb2FkRXJyb3IoXG4gICAgICAgICdQYXlsb2FkIGlzIG1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgXCJldmVudE5hbWVcIi4gRXZlbnRzIHNob3VsZCBpbXBsZW1lbnQgRXZlbnQgaW50ZXJmYWNlJyxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHV1aWQoKTtcbiAgICByZXR1cm4gbmV3IHRoaXMoaWRlbnRpZmllciwgcGF5bG9hZC5ldmVudE5hbWUsIHBheWxvYWQsIG5vdyk7XG4gIH1cbn1cbiJdfQ==