"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes/routes");
// controllers need to be referenced in order to get crawled by the generator
require("./controllers/usersControllers");
var inversify_config_1 = require("../inversify.config");
var types_1 = require("./types");
var app = (0, express_1.default)();
app.use('/docs', express_1.default.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', function (req, res) {
    res.sendFile(__dirname + '/swagger.json');
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
var userObj = inversify_config_1.myContainer.get(types_1.TYPES.Userdata);
console.log(userObj.getName());
(0, routes_1.RegisterRoutes)(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new NotFoundError();
    next(err);
});
// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        error: err
    });
});
app.listen(3000, function () {
    console.log("Connection established on port no 3000 go to http://localhost:3000");
});
