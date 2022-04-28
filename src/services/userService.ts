import { UsersList, UserDetails } from "../models/User";
import usersList from "../../db.json";
import { injectable } from "inversify";

@injectable()
export class UserService implements UserDetails {
  public getUser(id: number): any {
    return usersList.find((user) => user.id === id);
  }
  public async getUsersList(): Promise<UsersList> {
    return new Promise<UsersList>((resolve, reject) => {
      resolve(usersList);
    });
  }
}
