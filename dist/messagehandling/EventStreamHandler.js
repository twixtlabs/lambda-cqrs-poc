"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStreamHandler = void 0;
const Dispatcher_1 = require("./Dispatcher");
const NoMessageTargetError_1 = require("./NoMessageTargetError");
class EventStreamHandler {
    constructor({ loggerFactory, controllers }) {
        this.dispatcher = new Dispatcher_1.MessageDispatcher({ controllers });
    }
    /**
     * Dispatch each record to dispatcher
     * @param event source event is a CommandMessage
     */
    async handle(event) {
        var _a;
        const LOG = this.loggerFactory.createLogger("handle");
        // Ignore records with no new image. ie: we only care about new items
        const newItems = event.Records.filter((record) => {
            var _a;
            return !!((_a = record.dynamodb) === null || _a === void 0 ? void 0 : _a.NewImage);
        });
        for (const record of newItems) {
            try {
                await this.dispatcher.doDispatch((_a = record.dynamodb) === null || _a === void 0 ? void 0 : _a.NewImage);
            }
            catch (error) {
                if (error instanceof NoMessageTargetError_1.NoMessageTargetError) {
                    // Ignore entries with no target for processing
                    LOG.debug({ message: "Not processing stream entry. No target", data: { record } });
                }
                else {
                    // Rethrow other errors
                    throw error;
                }
            }
        }
        return;
    }
}
exports.EventStreamHandler = EventStreamHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdHJlYW1IYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lc3NhZ2VoYW5kbGluZy9FdmVudFN0cmVhbUhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWlEO0FBUWpELGlFQUE4RDtBQUU5RCxNQUFhLGtCQUFrQjtJQUc3QixZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBaUU7UUFDdkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDhCQUFpQixDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFpQzs7UUFDNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEQscUVBQXFFO1FBQ3JFLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O1lBQy9DLE9BQU8sQ0FBQyxRQUFDLE1BQU0sQ0FBQyxRQUFRLDBDQUFFLFFBQVEsQ0FBQSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxNQUFNLE1BQU0sSUFBSSxRQUFRLEVBQUU7WUFDN0IsSUFBSTtnQkFDRixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFvQyxNQUFTLE1BQU0sQ0FBQyxRQUFRLDBDQUFFLFFBQVMsQ0FBQyxDQUFDO2FBQzFHO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxLQUFLLFlBQVksMkNBQW9CLEVBQUU7b0JBQ3pDLCtDQUErQztvQkFDL0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3BGO3FCQUFNO29CQUNMLHVCQUF1QjtvQkFDdkIsTUFBTSxLQUFLLENBQUM7aUJBQ2I7YUFDRjtTQUNGO1FBQ0QsT0FBTztJQUNULENBQUM7Q0FDRjtBQWxDRCxnREFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlRGlzcGF0Y2hlciB9IGZyb20gXCIuL0Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRNZXNzYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXIvRG9tYWluRXZlbnRNZXNzYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vZXZlbnRcIjtcblxuaW1wb3J0IHsgR2VuZXJpY0RvbWFpbkV2ZW50TWVzc2FnZSB9IGZyb20gXCIuLi9tZXNzYWdpbmcvR2VuZXJpY0RvbWFpbkV2ZW50TWVzc2FnZVwiO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgeyBMb2dnZXJGYWN0b3J5IH0gZnJvbSBcIi4uL2xvZ2dpbmcvTG9nZ2VyRmFjdG9yeVwiO1xuaW1wb3J0IHsgTm9NZXNzYWdlVGFyZ2V0RXJyb3IgfSBmcm9tIFwiLi9Ob01lc3NhZ2VUYXJnZXRFcnJvclwiO1xudHlwZSBDb250cm9sbGVyTGlzdCA9IERvbWFpbkV2ZW50TWVzc2FnZUNvbnRyb2xsZXI8RXZlbnQ+W107XG5leHBvcnQgY2xhc3MgRXZlbnRTdHJlYW1IYW5kbGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRpc3BhdGNoZXI6IE1lc3NhZ2VEaXNwYXRjaGVyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9nZ2VyRmFjdG9yeTogTG9nZ2VyRmFjdG9yeTtcbiAgY29uc3RydWN0b3IoeyBsb2dnZXJGYWN0b3J5LCBjb250cm9sbGVycyB9OiB7IGxvZ2dlckZhY3Rvcnk6IExvZ2dlckZhY3Rvcnk7IGNvbnRyb2xsZXJzOiBDb250cm9sbGVyTGlzdCB9KSB7XG4gICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IE1lc3NhZ2VEaXNwYXRjaGVyKHsgY29udHJvbGxlcnMgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZWFjaCByZWNvcmQgdG8gZGlzcGF0Y2hlclxuICAgKiBAcGFyYW0gZXZlbnQgc291cmNlIGV2ZW50IGlzIGEgQ29tbWFuZE1lc3NhZ2VcbiAgICovXG4gIGFzeW5jIGhhbmRsZShldmVudDogbGFtYmRhLkR5bmFtb0RCU3RyZWFtRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBMT0cgPSB0aGlzLmxvZ2dlckZhY3RvcnkuY3JlYXRlTG9nZ2VyKFwiaGFuZGxlXCIpO1xuXG4gICAgLy8gSWdub3JlIHJlY29yZHMgd2l0aCBubyBuZXcgaW1hZ2UuIGllOiB3ZSBvbmx5IGNhcmUgYWJvdXQgbmV3IGl0ZW1zXG4gICAgY29uc3QgbmV3SXRlbXMgPSBldmVudC5SZWNvcmRzLmZpbHRlcigocmVjb3JkKSA9PiB7XG4gICAgICByZXR1cm4gISFyZWNvcmQuZHluYW1vZGI/Lk5ld0ltYWdlO1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCByZWNvcmQgb2YgbmV3SXRlbXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGlzcGF0Y2hlci5kb0Rpc3BhdGNoKDxHZW5lcmljRG9tYWluRXZlbnRNZXNzYWdlPEV2ZW50Pj4oPHVua25vd24+cmVjb3JkLmR5bmFtb2RiPy5OZXdJbWFnZSkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm9NZXNzYWdlVGFyZ2V0RXJyb3IpIHtcbiAgICAgICAgICAvLyBJZ25vcmUgZW50cmllcyB3aXRoIG5vIHRhcmdldCBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICAgIExPRy5kZWJ1Zyh7IG1lc3NhZ2U6IFwiTm90IHByb2Nlc3Npbmcgc3RyZWFtIGVudHJ5LiBObyB0YXJnZXRcIiwgZGF0YTogeyByZWNvcmQgfSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSZXRocm93IG90aGVyIGVycm9yc1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuIl19