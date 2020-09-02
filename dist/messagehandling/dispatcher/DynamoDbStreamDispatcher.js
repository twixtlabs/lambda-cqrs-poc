"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbStreamDispatcher = void 0;
const AbstractDispatcher_1 = require("../AbstractDispatcher");
const DynamoDbStreamRecordHandlerAdapter_1 = require("../adapter/DynamoDbStreamRecordHandlerAdapter");
const AWS = require("aws-sdk");
/**
 * Dispatcher implementation for when source event is DynamoDbStreamEvent
 */
class DynamoDbStreamDispatcher extends AbstractDispatcher_1.AbstractDispatcher {
    constructor({ mappings }) {
        super({
            mappings,
            adapters: [new DynamoDbStreamRecordHandlerAdapter_1.DynamoDbStreamRecordHandlerAdapter()],
        });
    }
    async doDispatch(event) {
        var _a;
        const insertRecords = event.Records.filter((record) => {
            return record.eventName === "INSERT";
        });
        for (const record of insertRecords) {
            const dbItem = (_a = record.dynamodb) === null || _a === void 0 ? void 0 : _a.NewImage;
            const item = dbItem ? AWS.DynamoDB.Converter.unmarshall(dbItem) : null;
            // Find the first adapter in the list that can handle the event
            const adapter = item ? this.getAdapter(item) : null;
            const handler = item ? this.getHandler(item) : null;
            if (adapter && handler && item) {
                await adapter.handle(item, handler);
            }
            else {
                // Ignore entries we can't handle
            }
        }
        return;
    }
}
exports.DynamoDbStreamDispatcher = DynamoDbStreamDispatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1vRGJTdHJlYW1EaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lc3NhZ2VoYW5kbGluZy9kaXNwYXRjaGVyL0R5bmFtb0RiU3RyZWFtRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4REFBMkQ7QUFFM0Qsc0dBQW1HO0FBQ25HLCtCQUErQjtBQUUvQjs7R0FFRztBQUNILE1BQWEsd0JBQXlCLFNBQVEsdUNBQWtCO0lBQzlELFlBQVksRUFBRSxRQUFRLEVBQWtDO1FBQ3RELEtBQUssQ0FBQztZQUNKLFFBQVE7WUFDUixRQUFRLEVBQUUsQ0FBQyxJQUFJLHVFQUFrQyxFQUFFLENBQUM7U0FDckQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBaUM7O1FBQ2hELE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEQsT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssTUFBTSxNQUFNLElBQUksYUFBYSxFQUFFO1lBQ2xDLE1BQU0sTUFBTSxTQUFHLE1BQU0sQ0FBQyxRQUFRLDBDQUFFLFFBQVEsQ0FBQztZQUN6QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQTZCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVwRywrREFBK0Q7WUFDL0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDOUIsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxpQ0FBaUM7YUFDbEM7U0FDRjtRQUNELE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUEzQkQsNERBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgeyBBYnN0cmFjdERpc3BhdGNoZXIgfSBmcm9tIFwiLi4vQWJzdHJhY3REaXNwYXRjaGVyXCI7XG5pbXBvcnQgeyBIYW5kbGVyTWFwcGluZyB9IGZyb20gXCIuLi9IYW5kbGVyTWFwcGluZ1wiO1xuaW1wb3J0IHsgRHluYW1vRGJTdHJlYW1SZWNvcmRIYW5kbGVyQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL0R5bmFtb0RiU3RyZWFtUmVjb3JkSGFuZGxlckFkYXB0ZXJcIjtcbmltcG9ydCAqIGFzIEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuXG4vKipcbiAqIERpc3BhdGNoZXIgaW1wbGVtZW50YXRpb24gZm9yIHdoZW4gc291cmNlIGV2ZW50IGlzIER5bmFtb0RiU3RyZWFtRXZlbnRcbiAqL1xuZXhwb3J0IGNsYXNzIER5bmFtb0RiU3RyZWFtRGlzcGF0Y2hlciBleHRlbmRzIEFic3RyYWN0RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHsgbWFwcGluZ3MgfTogeyBtYXBwaW5nczogSGFuZGxlck1hcHBpbmdbXSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgbWFwcGluZ3MsXG4gICAgICBhZGFwdGVyczogW25ldyBEeW5hbW9EYlN0cmVhbVJlY29yZEhhbmRsZXJBZGFwdGVyKCldLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZG9EaXNwYXRjaChldmVudDogbGFtYmRhLkR5bmFtb0RCU3RyZWFtRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpbnNlcnRSZWNvcmRzID0gZXZlbnQuUmVjb3Jkcy5maWx0ZXIoKHJlY29yZCkgPT4ge1xuICAgICAgcmV0dXJuIHJlY29yZC5ldmVudE5hbWUgPT09IFwiSU5TRVJUXCI7XG4gICAgfSk7XG4gICAgZm9yIChjb25zdCByZWNvcmQgb2YgaW5zZXJ0UmVjb3Jkcykge1xuICAgICAgY29uc3QgZGJJdGVtID0gcmVjb3JkLmR5bmFtb2RiPy5OZXdJbWFnZTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkYkl0ZW0gPyAoQVdTLkR5bmFtb0RCLkNvbnZlcnRlci51bm1hcnNoYWxsKGRiSXRlbSkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIDogbnVsbDtcblxuICAgICAgLy8gRmluZCB0aGUgZmlyc3QgYWRhcHRlciBpbiB0aGUgbGlzdCB0aGF0IGNhbiBoYW5kbGUgdGhlIGV2ZW50XG4gICAgICBjb25zdCBhZGFwdGVyID0gaXRlbSA/IHRoaXMuZ2V0QWRhcHRlcihpdGVtKSA6IG51bGw7XG4gICAgICBjb25zdCBoYW5kbGVyID0gaXRlbSA/IHRoaXMuZ2V0SGFuZGxlcihpdGVtKSA6IG51bGw7XG4gICAgICBpZiAoYWRhcHRlciAmJiBoYW5kbGVyICYmIGl0ZW0pIHtcbiAgICAgICAgYXdhaXQgYWRhcHRlci5oYW5kbGUoaXRlbSwgaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZ25vcmUgZW50cmllcyB3ZSBjYW4ndCBoYW5kbGVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=