import { inject, injectable } from "inversify";
import { UserData,UserName } from "../models/User";
import { TYPES } from "../types";

@injectable()
export class FirstUser implements UserName{

    public setName(): string {
        return "John";
    }
}
@injectable()
export class Users implements UserData{
    private user1:UserName;
    constructor(@inject(TYPES.Username) user1:UserName){
        this.user1=user1;
    }
    public getName(): string {
        return this.user1.setName();
    }
}