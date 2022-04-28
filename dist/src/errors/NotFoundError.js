"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor() {
        super("Route Not Handled");
        this.status = 404;
    }
}
exports.default = NotFoundError;
