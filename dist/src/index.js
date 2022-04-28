"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/routes");
const NotFoundError_1 = __importDefault(require("./errors/NotFoundError"));
// controllers need to be referenced in order to get crawled by the generator
require("./controllers/usersControllers");
const app = (0, express_1.default)();
app.use("/docs", express_1.default.static(__dirname + "/swagger-ui"));
app.use("/swagger.json", (req, res) => {
    res.sendFile(__dirname + "/swagger.json");
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
(0, routes_1.RegisterRoutes)(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new NotFoundError_1.default();
    next(err);
});
// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err,
    });
});
app.listen(3000, () => {
    console.log("Connection established on port no 3000 go to http://localhost:3000");
});
