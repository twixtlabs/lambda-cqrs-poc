"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractQuery = void 0;
const class_validator_1 = require("class-validator");
class AbstractQuery {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4)
], AbstractQuery.prototype, "queryName", void 0);
exports.AbstractQuery = AbstractQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RRdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeWhhbmRsaW5nL0Fic3RyYWN0UXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscURBQXNEO0FBR3RELE1BQXNCLGFBQWE7Q0FJbEM7QUFEQztJQUZDLDBCQUFRLEVBQUU7SUFDViwyQkFBUyxDQUFDLENBQUMsQ0FBQztnREFDSztBQUhwQixzQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzU3RyaW5nLCBNaW5MZW5ndGggfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuL1F1ZXJ5XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFF1ZXJ5IGltcGxlbWVudHMgUXVlcnkge1xuICBASXNTdHJpbmcoKVxuICBATWluTGVuZ3RoKDQpXG4gIHF1ZXJ5TmFtZTogc3RyaW5nO1xufVxuIl19