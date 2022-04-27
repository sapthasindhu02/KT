"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes/routes");
// controllers need to be referenced in order to get crawled by the generator
require("./controllers/usersControllers");
const inversify_config_1 = require("../inversify.config");
const types_1 = require("./types");
const app = (0, express_1.default)();
app.use("/docs", express_1.default.static(__dirname + "/swagger-ui"));
app.use("/swagger.json", (req, res) => {
    res.sendFile(__dirname + "/swagger.json");
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const userObj = inversify_config_1.iocContainer.get(types_1.TYPES.Userdata);
let hello = function () {
    console.log("nothing");
};
let ob = new hello();
console.log(`${userObj.getInfo()} ${typeof hello()} and ${typeof ob} `);
(0, routes_1.RegisterRoutes)(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new NotFoundError();
    next(err);
});
// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        error: err,
    });
});
app.listen(3000, () => {
    console.log("Connection established on port no 3000 go to http://localhost:3000");
});
