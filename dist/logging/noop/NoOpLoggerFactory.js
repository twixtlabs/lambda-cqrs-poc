"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOpLoggerFactory = void 0;
const NoOpLoggerImpl_1 = require("./NoOpLoggerImpl");
class NoOpLoggerFactory {
    createLogger() {
        return new NoOpLoggerImpl_1.NoOpLoggerImpl();
    }
}
exports.NoOpLoggerFactory = NoOpLoggerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9PcExvZ2dlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbG9nZ2luZy9ub29wL05vT3BMb2dnZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHFEQUFrRDtBQUVsRCxNQUFhLGlCQUFpQjtJQUM1QixZQUFZO1FBQ1YsT0FBTyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFKRCw4Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlckZhY3RvcnkgfSBmcm9tIFwiLi4vTG9nZ2VyRmFjdG9yeVwiO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBOb09wTG9nZ2VySW1wbCB9IGZyb20gXCIuL05vT3BMb2dnZXJJbXBsXCI7XG5cbmV4cG9ydCBjbGFzcyBOb09wTG9nZ2VyRmFjdG9yeSBpbXBsZW1lbnRzIExvZ2dlckZhY3Rvcnkge1xuICBjcmVhdGVMb2dnZXIoKTogTG9nZ2VyIHtcbiAgICByZXR1cm4gbmV3IE5vT3BMb2dnZXJJbXBsKCk7XG4gIH1cbn1cbiJdfQ==