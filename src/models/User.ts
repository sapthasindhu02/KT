export interface User {
  id: number;
  email: string;
  name: string;
  status?: string;
  phoneNumbers: string[];
}
export interface Interface1 {
  getUser(id: number): any;
  getUsersList(): Promise<UsersList>;
  create(requestBody: UserCreationRequest): Promise<User>;
}
export interface Interface2 {
  getUserObj(id: number): User;
  getUsersList(): UsersList;
  createUser(requestBody: UserCreationRequest): Promise<void>;
}
export type UsersList = Array<User>;
export type aa = {
  id: number;
  email: string;
  name: string;
  status?: string;
  phoneNumbers: string[];
};
export interface UserCreationRequest {
  email: string;
  name: string;
}
export interface UserData {
  getInfo(): string;
}
export default interface UserName {
  getName(): string;
  getMsg(): string;
}
