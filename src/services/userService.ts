import {
  User,
  UsersList,
  UserCreationRequest,
  aa,
  Interface1,
} from "../models/User";
import usersList from "../../db.json";
import { injectable } from "inversify";

@injectable()
export class UserService implements Interface1 {
  public getUser(id: number): any {
    return usersList.find((user) => user.id === id);
  }
  public async getUsersList(): Promise<UsersList> {
    return new Promise<UsersList>((resolve, reject) => {
      resolve(usersList);
    });
  }
  public async create(requestBody: UserCreationRequest): Promise<User> {
    let user: User = {
      id: 12345,
      email: requestBody.email,
      name: requestBody.name,
      phoneNumbers: [],
      status: "status",
    };
    return Promise.resolve(user);
  }
}
