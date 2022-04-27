import { Container, decorate, inject, injectable, interfaces } from "inversify";
import {
  autoProvide,
  fluentProvide,
  provide,
} from "inversify-binding-decorators";
import { TYPES } from "./src/types";
import UserName, { UserData } from "./src/models/User";
import { FirstUser, Users } from "./src/controllers/entities1";
import { UserService } from "./src/services/userService";
import { UsersController } from "./src/controllers/usersControllers";
import { Controller } from "tsoa";

const iocContainer = new Container();
decorate(injectable(), Controller);

iocContainer.bind<UserName>(TYPES.Username).to(FirstUser);
iocContainer.bind<UserData>(TYPES.Userdata).to(Users);
iocContainer
  .bind<UserService>(TYPES.User_Service)
  .to(UserService)
  .inSingletonScope();
iocContainer.bind<UsersController>(UsersController).toSelf();

export { iocContainer };
