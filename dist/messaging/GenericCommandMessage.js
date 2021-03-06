"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericCommandMessage = void 0;
const uuid_1 = require("uuid");
const GenericMessage_1 = require("./GenericMessage");
const InvalidPayloadError_1 = require("./InvalidPayloadError");
/**
 * Generic implementation of CommandMessage
 */
class GenericCommandMessage extends GenericMessage_1.GenericMessage {
    constructor(identifier, payloadType, payload) {
        super(identifier, payloadType, payload);
    }
    static asCommandMessage(payload) {
        if (!payload.commandName) {
            throw new InvalidPayloadError_1.InvalidPayloadError('Payload is missing required property "commandName". Commands should implement Command interface');
        }
        const identifier = uuid_1.v4();
        return new this(identifier, payload.commandName, payload);
    }
    get commandName() {
        return this.payload.commandName;
    }
}
exports.GenericCommandMessage = GenericCommandMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0NvbW1hbmRNZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lc3NhZ2luZy9HZW5lcmljQ29tbWFuZE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQWtDO0FBQ2xDLHFEQUFrRDtBQUdsRCwrREFBNEQ7QUFFNUQ7O0dBRUc7QUFDSCxNQUFhLHFCQUF5QyxTQUFRLCtCQUFpQjtJQUM3RSxZQUFzQixVQUFrQixFQUFFLFdBQW1CLEVBQUUsT0FBVTtRQUN2RSxLQUFLLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ00sTUFBTSxDQUFDLGdCQUFnQixDQUFvQixPQUFVO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSx5Q0FBbUIsQ0FDM0IsaUdBQWlHLENBQ2xHLENBQUM7U0FDSDtRQUVELE1BQU0sVUFBVSxHQUFHLFNBQUksRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBakJELHNEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgR2VuZXJpY01lc3NhZ2UgfSBmcm9tIFwiLi9HZW5lcmljTWVzc2FnZVwiO1xuaW1wb3J0IHsgQ29tbWFuZE1lc3NhZ2UgfSBmcm9tIFwiLi9Db21tYW5kTWVzc2FnZVwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuLi9jb21tYW5kXCI7XG5pbXBvcnQgeyBJbnZhbGlkUGF5bG9hZEVycm9yIH0gZnJvbSBcIi4vSW52YWxpZFBheWxvYWRFcnJvclwiO1xuXG4vKipcbiAqIEdlbmVyaWMgaW1wbGVtZW50YXRpb24gb2YgQ29tbWFuZE1lc3NhZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyaWNDb21tYW5kTWVzc2FnZTxUIGV4dGVuZHMgQ29tbWFuZD4gZXh0ZW5kcyBHZW5lcmljTWVzc2FnZTxUPiBpbXBsZW1lbnRzIENvbW1hbmRNZXNzYWdlPFQ+IHtcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgcGF5bG9hZFR5cGU6IHN0cmluZywgcGF5bG9hZDogVCkge1xuICAgIHN1cGVyKGlkZW50aWZpZXIsIHBheWxvYWRUeXBlLCBwYXlsb2FkKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGFzQ29tbWFuZE1lc3NhZ2U8VCBleHRlbmRzIENvbW1hbmQ+KHBheWxvYWQ6IFQpOiBDb21tYW5kTWVzc2FnZTxUPiB7XG4gICAgaWYgKCFwYXlsb2FkLmNvbW1hbmROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBheWxvYWRFcnJvcihcbiAgICAgICAgJ1BheWxvYWQgaXMgbWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSBcImNvbW1hbmROYW1lXCIuIENvbW1hbmRzIHNob3VsZCBpbXBsZW1lbnQgQ29tbWFuZCBpbnRlcmZhY2UnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZGVudGlmaWVyID0gdXVpZCgpO1xuICAgIHJldHVybiBuZXcgdGhpcyhpZGVudGlmaWVyLCBwYXlsb2FkLmNvbW1hbmROYW1lLCBwYXlsb2FkKTtcbiAgfVxuICBnZXQgY29tbWFuZE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wYXlsb2FkLmNvbW1hbmROYW1lO1xuICB9XG59XG4iXX0=