"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlerAdapter = void 0;
class CommandHandlerAdapter {
    supports(event) {
        return (Object.prototype.hasOwnProperty.call(event, "payload") &&
            Object.prototype.hasOwnProperty.call(event.payload, "commandName"));
    }
    async handle(message, handler) {
        return await handler.handleMessage(message);
    }
}
exports.CommandHandlerAdapter = CommandHandlerAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZEhhbmRsZXJBZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lc3NhZ2VoYW5kbGluZy9hZGFwdGVyL0NvbW1hbmRIYW5kbGVyQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxNQUFhLHFCQUFxQjtJQUNoQyxRQUFRLENBQUMsS0FBOEI7UUFDckMsT0FBTyxDQUNMLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNLENBQ1YsT0FBZ0MsRUFDaEMsT0FBa0U7UUFFbEUsT0FBTyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBYkQsc0RBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW5kbGVyQWRhcHRlciB9IGZyb20gXCIuLi9IYW5kbGVyQWRhcHRlclwiO1xuaW1wb3J0IHsgQ29tbWFuZE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbWVzc2FnaW5nXCI7XG5pbXBvcnQgeyBNZXNzYWdlSGFuZGxlciB9IGZyb20gXCIuLi9NZXNzYWdlSGFuZGxlclwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCIuLi8uLi9jb21tYW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kSGFuZGxlckFkYXB0ZXIgaW1wbGVtZW50cyBIYW5kbGVyQWRhcHRlciB7XG4gIHN1cHBvcnRzKGV2ZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXZlbnQsIFwicGF5bG9hZFwiKSAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV2ZW50LnBheWxvYWQsIFwiY29tbWFuZE5hbWVcIilcbiAgICApO1xuICB9XG4gIGFzeW5jIGhhbmRsZShcbiAgICBtZXNzYWdlOiBDb21tYW5kTWVzc2FnZTxDb21tYW5kPixcbiAgICBoYW5kbGVyOiBNZXNzYWdlSGFuZGxlcjxDb21tYW5kTWVzc2FnZTxDb21tYW5kPiwgQ29tbWFuZCwgdW5rbm93bj4sXG4gICk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIHJldHVybiBhd2FpdCBoYW5kbGVyLmhhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==