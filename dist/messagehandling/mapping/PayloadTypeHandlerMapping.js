"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadTypeHandlerMapping = void 0;
class PayloadTypeHandlerMapping {
    constructor({ payloadType, handler, }) {
        this.payloadType = payloadType;
        this.handler = handler;
    }
    getHandler(event) {
        if (event && this.payloadType === event.payloadType) {
            return this.handler;
        }
        else {
            return null;
        }
    }
}
exports.PayloadTypeHandlerMapping = PayloadTypeHandlerMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bG9hZFR5cGVIYW5kbGVyTWFwcGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXNzYWdlaGFuZGxpbmcvbWFwcGluZy9QYXlsb2FkVHlwZUhhbmRsZXJNYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEseUJBQXlCO0lBR3BDLFlBQVksRUFDVixXQUFXLEVBQ1gsT0FBTyxHQUlSO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNELFVBQVUsQ0FBQyxLQUE4QjtRQUN2QyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUNGO0FBcEJELDhEQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhbmRsZXJNYXBwaW5nIH0gZnJvbSBcIi4uL0hhbmRsZXJNYXBwaW5nXCI7XG5pbXBvcnQgeyBNZXNzYWdlSGFuZGxlciB9IGZyb20gXCIuLi9NZXNzYWdlSGFuZGxlclwiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9tZXNzYWdpbmcvTWVzc2FnZVwiO1xuXG5leHBvcnQgY2xhc3MgUGF5bG9hZFR5cGVIYW5kbGVyTWFwcGluZyBpbXBsZW1lbnRzIEhhbmRsZXJNYXBwaW5nIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXlsb2FkVHlwZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZXI6IE1lc3NhZ2VIYW5kbGVyPE1lc3NhZ2U8dW5rbm93bj4sIHVua25vd24sIHVua25vd24+O1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgcGF5bG9hZFR5cGUsXG4gICAgaGFuZGxlcixcbiAgfToge1xuICAgIHBheWxvYWRUeXBlOiBzdHJpbmc7XG4gICAgaGFuZGxlcjogTWVzc2FnZUhhbmRsZXI8TWVzc2FnZTx1bmtub3duPiwgdW5rbm93biwgdW5rbm93bj47XG4gIH0pIHtcbiAgICB0aGlzLnBheWxvYWRUeXBlID0gcGF5bG9hZFR5cGU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuICBnZXRIYW5kbGVyKGV2ZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IE1lc3NhZ2VIYW5kbGVyPE1lc3NhZ2U8dW5rbm93bj4sIHVua25vd24sIHVua25vd24+IHwgbnVsbCB7XG4gICAgaWYgKGV2ZW50ICYmIHRoaXMucGF5bG9hZFR5cGUgPT09IGV2ZW50LnBheWxvYWRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==