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
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional()
], AbstractCommand.prototype, "targetAggregateVersion", void 0);
exports.AbstractCommand = AbstractCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRoYW5kbGluZy9BYnN0cmFjdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscURBQTRFO0FBRTVFLE1BQXNCLGVBQWU7Q0FPcEM7QUFKQztJQUZDLDBCQUFRLEVBQUU7SUFDViwyQkFBUyxDQUFDLENBQUMsQ0FBQztvREFDTztBQUdwQjtJQUZDLDBCQUFRLEVBQUU7SUFDViw0QkFBVSxFQUFFOytEQUNrQjtBQU5qQywwQ0FPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi9Db21tYW5kXCI7XG5pbXBvcnQgeyBJc051bWJlciwgSXNPcHRpb25hbCwgSXNTdHJpbmcsIE1pbkxlbmd0aCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29tbWFuZCBpbXBsZW1lbnRzIENvbW1hbmQge1xuICBASXNTdHJpbmcoKVxuICBATWluTGVuZ3RoKDQpXG4gIGNvbW1hbmROYW1lOiBzdHJpbmc7XG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdGFyZ2V0QWdncmVnYXRlVmVyc2lvbjogbnVtYmVyO1xufVxuIl19