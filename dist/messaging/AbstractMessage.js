"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMessage = void 0;
/**
 * Abstract base class for Messages/
 */
class AbstractMessage {
    /**
     * New message
     * @param identifier the message identifier
     * @param payloadType the payloadType
     * @param payload the payload
     * @protected
     */
    constructor(identifier, payloadType, payload) {
        this.identifier = identifier;
        this.payloadType = payloadType;
        this.payload = payload;
    }
}
exports.AbstractMessage = AbstractMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RNZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lc3NhZ2luZy9BYnN0cmFjdE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7O0dBRUc7QUFDSCxNQUFzQixlQUFlO0lBQ25DOzs7Ozs7T0FNRztJQUNILFlBQ2tCLFVBQWtCLEVBQ2xCLFdBQW1CLEVBQ25CLE9BQVU7UUFGVixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQUc7SUFDekIsQ0FBQztDQUNMO0FBYkQsMENBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIE1lc3NhZ2VzL1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXNzYWdlPFQ+IGltcGxlbWVudHMgTWVzc2FnZTxUPiB7XG4gIC8qKlxuICAgKiBOZXcgbWVzc2FnZVxuICAgKiBAcGFyYW0gaWRlbnRpZmllciB0aGUgbWVzc2FnZSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSBwYXlsb2FkVHlwZSB0aGUgcGF5bG9hZFR5cGVcbiAgICogQHBhcmFtIHBheWxvYWQgdGhlIHBheWxvYWRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHBheWxvYWRUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IHBheWxvYWQ6IFQsXG4gICkge31cbn1cbiJdfQ==