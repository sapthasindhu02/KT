export interface User {
  id: number;
  email: string;
  name: string;
  status?: string;
  phoneNumbers: string[];
}
export interface UserDetails {
  getUser(id: number): any;
  getUsersList(): Promise<UsersList>;
}
export type UsersList = Array<User>;
