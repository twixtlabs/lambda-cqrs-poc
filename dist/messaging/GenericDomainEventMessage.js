"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDomainEventMessage = void 0;
const uuid_1 = require("uuid");
const GenericEventMessage_1 = require("./GenericEventMessage");
const InvalidPayloadError_1 = require("./InvalidPayloadError");
/**
 * Generic implementation of {@link DomainEventMessage}
 */
class GenericDomainEventMessage extends GenericEventMessage_1.GenericEventMessage {
    constructor(identifier, payloadType, type, payload, aggregateIdentifier, sequenceNumber, timestamp) {
        if (!payload.eventName) {
            throw new InvalidPayloadError_1.InvalidPayloadError('Payload is missing required property "eventName". Events should implement Event interface');
        }
        super(identifier, payload.eventName, payload, timestamp);
        this.type = type;
        this.aggregateIdentifier = aggregateIdentifier;
        this.sequenceNumber = sequenceNumber;
    }
    static asDomainEventMessage(type, payload, aggregateIdentifier, sequenceNumber) {
        if (!payload.eventName) {
            throw new InvalidPayloadError_1.InvalidPayloadError('Payload is missing required property "eventName". Events should implement Event interface');
        }
        const now = Date.now();
        const identifier = uuid_1.v4();
        return new this(identifier, payload.eventName, type, payload, aggregateIdentifier, sequenceNumber, now);
    }
}
exports.GenericDomainEventMessage = GenericDomainEventMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0RvbWFpbkV2ZW50TWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXNzYWdpbmcvR2VuZXJpY0RvbWFpbkV2ZW50TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBa0M7QUFFbEMsK0RBQTREO0FBRTVELCtEQUE0RDtBQUc1RDs7R0FFRztBQUNILE1BQWEseUJBQ1gsU0FBUSx5Q0FBc0I7SUFLOUIsWUFDRSxVQUFrQixFQUNsQixXQUFtQixFQUNuQixJQUFZLEVBQ1osT0FBVSxFQUNWLG1CQUEyQixFQUMzQixjQUFzQixFQUN0QixTQUFpQjtRQUVqQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLElBQUkseUNBQW1CLENBQzNCLDJGQUEyRixDQUM1RixDQUFDO1NBQ0g7UUFFRCxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxJQUFZLEVBQ1osT0FBVSxFQUNWLG1CQUEyQixFQUMzQixjQUFzQjtRQUV0QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixNQUFNLElBQUkseUNBQW1CLENBQzNCLDJGQUEyRixDQUM1RixDQUFDO1NBQ0g7UUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsTUFBTSxVQUFVLEdBQUcsU0FBSSxFQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDO0NBQ0Y7QUExQ0QsOERBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IEdlbmVyaWNFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi9HZW5lcmljRXZlbnRNZXNzYWdlXCI7XG5pbXBvcnQgeyBEb21haW5FdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi9Eb21haW5FdmVudE1lc3NhZ2VcIjtcbmltcG9ydCB7IEludmFsaWRQYXlsb2FkRXJyb3IgfSBmcm9tIFwiLi9JbnZhbGlkUGF5bG9hZEVycm9yXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi9ldmVudFwiO1xuXG4vKipcbiAqIEdlbmVyaWMgaW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIERvbWFpbkV2ZW50TWVzc2FnZX1cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNEb21haW5FdmVudE1lc3NhZ2U8VCBleHRlbmRzIEV2ZW50PlxuICBleHRlbmRzIEdlbmVyaWNFdmVudE1lc3NhZ2U8VD5cbiAgaW1wbGVtZW50cyBEb21haW5FdmVudE1lc3NhZ2U8VD4ge1xuICBwdWJsaWMgcmVhZG9ubHkgYWdncmVnYXRlSWRlbnRpZmllcjogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgc2VxdWVuY2VOdW1iZXI6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIGlkZW50aWZpZXI6IHN0cmluZyxcbiAgICBwYXlsb2FkVHlwZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBULFxuICAgIGFnZ3JlZ2F0ZUlkZW50aWZpZXI6IHN0cmluZyxcbiAgICBzZXF1ZW5jZU51bWJlcjogbnVtYmVyLFxuICAgIHRpbWVzdGFtcDogbnVtYmVyLFxuICApIHtcbiAgICBpZiAoIXBheWxvYWQuZXZlbnROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBheWxvYWRFcnJvcihcbiAgICAgICAgJ1BheWxvYWQgaXMgbWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBcImV2ZW50TmFtZVwiLiBFdmVudHMgc2hvdWxkIGltcGxlbWVudCBFdmVudCBpbnRlcmZhY2UnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBzdXBlcihpZGVudGlmaWVyLCBwYXlsb2FkLmV2ZW50TmFtZSwgcGF5bG9hZCwgdGltZXN0YW1wKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWdncmVnYXRlSWRlbnRpZmllciA9IGFnZ3JlZ2F0ZUlkZW50aWZpZXI7XG4gICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IHNlcXVlbmNlTnVtYmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc0RvbWFpbkV2ZW50TWVzc2FnZTxUIGV4dGVuZHMgRXZlbnQ+KFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBwYXlsb2FkOiBULFxuICAgIGFnZ3JlZ2F0ZUlkZW50aWZpZXI6IHN0cmluZyxcbiAgICBzZXF1ZW5jZU51bWJlcjogbnVtYmVyLFxuICApOiBEb21haW5FdmVudE1lc3NhZ2U8VD4ge1xuICAgIGlmICghcGF5bG9hZC5ldmVudE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGF5bG9hZEVycm9yKFxuICAgICAgICAnUGF5bG9hZCBpcyBtaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5IFwiZXZlbnROYW1lXCIuIEV2ZW50cyBzaG91bGQgaW1wbGVtZW50IEV2ZW50IGludGVyZmFjZScsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSB1dWlkKCk7XG4gICAgcmV0dXJuIG5ldyB0aGlzKGlkZW50aWZpZXIsIHBheWxvYWQuZXZlbnROYW1lLCB0eXBlLCBwYXlsb2FkLCBhZ2dyZWdhdGVJZGVudGlmaWVyLCBzZXF1ZW5jZU51bWJlciwgbm93KTtcbiAgfVxufVxuIl19