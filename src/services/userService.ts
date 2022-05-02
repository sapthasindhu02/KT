import { UsersList, UserDetails } from "../models/User";
//import usersList from "../../db.json";
import { injectable } from "inversify";
import { UsersArray } from "../../db";
@injectable()
export class UserService implements UserDetails {
  public getUser(id: number): any {
    return UsersArray().find((user) => user.id === id);
    //return usersList.find((user) => user.id === id);
  }
  public async getUsersList(): Promise<UsersList> {
    return new Promise<UsersList>((resolve, reject) => {
      resolve(UsersArray());
    });
  }
}
