"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCommand = void 0;
const class_validator_1 = require("class-validator");
class AbstractCommand {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4)
], AbstractCommand.prototype, "commandName", void 0);
__decorate([
    class_validator_1.IsOptional()
], AbstractCommand.prototype, "targetAggregateIdentifier", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional()
], AbstractCommand.prototype, "targetAggregateVersion", void 0);
exports.AbstractCommand = AbstractCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmQvQWJzdHJhY3RDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFEQUE0RTtBQUU1RSxNQUFzQixlQUFlO0NBU3BDO0FBTkM7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMkJBQVMsQ0FBQyxDQUFDLENBQUM7b0RBQ087QUFFcEI7SUFEQyw0QkFBVSxFQUFFO2tFQUNzQjtBQUduQztJQUZDLDBCQUFRLEVBQUU7SUFDViw0QkFBVSxFQUFFOytEQUNtQjtBQVJsQywwQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9Db21tYW5kXCI7XG5pbXBvcnQgeyBJc051bWJlciwgSXNPcHRpb25hbCwgSXNTdHJpbmcsIE1pbkxlbmd0aCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29tbWFuZCBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBASXNTdHJpbmcoKVxuICBATWluTGVuZ3RoKDQpXG4gIGNvbW1hbmROYW1lOiBzdHJpbmc7XG4gIEBJc09wdGlvbmFsKClcbiAgdGFyZ2V0QWdncmVnYXRlSWRlbnRpZmllcj86IHN0cmluZztcbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB0YXJnZXRBZ2dyZWdhdGVWZXJzaW9uPzogbnVtYmVyO1xufVxuIl19