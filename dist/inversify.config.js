"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocContainer = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./src/types");
const entities1_1 = require("./src/controllers/entities1");
const userService_1 = require("./src/services/userService");
const usersControllers_1 = require("./src/controllers/usersControllers");
const tsoa_1 = require("tsoa");
const iocContainer = new inversify_1.Container();
exports.iocContainer = iocContainer;
(0, inversify_1.decorate)((0, inversify_1.injectable)(), tsoa_1.Controller);
iocContainer.bind(types_1.TYPES.Username).to(entities1_1.FirstUser);
iocContainer.bind(types_1.TYPES.Userdata).to(entities1_1.Users);
iocContainer
    .bind(types_1.TYPES.User_Service)
    .to(userService_1.UserService)
    .inSingletonScope();
iocContainer.bind(usersControllers_1.UsersController).toSelf();
