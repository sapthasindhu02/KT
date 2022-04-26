import { Container } from "inversify";
import { TYPES } from "./src/types";
import { UserData, UserName } from "./src/models/User";
import { FirstUser, Users } from "./src/controllers/entities1";

const myContainer = new Container();
myContainer.bind<UserData>(TYPES.Userdata).to(Users);
myContainer.bind<UserName>(TYPES.Username).to(FirstUser);
export { myContainer }