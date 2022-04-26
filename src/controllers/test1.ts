import { myContainer } from "../../inversify.config";
import { UserData } from "../models/User";
import { TYPES } from "../types";

const userObj=myContainer.get<UserData>(TYPES.Userdata);
console.log(userObj.getName());
