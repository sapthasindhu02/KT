import { Container, decorate, injectable } from "inversify";
import { TYPES } from "./src/types";
import { UserService } from "./src/services/userService";
import { UsersController } from "./src/controllers/usersControllers";
import { Controller } from "tsoa";

const iocContainer = new Container();
decorate(injectable(), Controller);

iocContainer.bind<UserService>(TYPES.User_Service).to(UserService);
iocContainer.bind<UsersController>(UsersController).toSelf();

export { iocContainer };
