import { inject, injectable } from "inversify";
import  UserName,{ UserData } from "../models/User";//Named and default exports
import { TYPES } from "../types";

@injectable()
export class FirstUser implements UserName{
    
    public getName(): string {
        return 'John';
    }
    public getMsg(): string {
        return `Hi this is ${this.getName()}`;
    }
}
@injectable()
export class Users implements UserData{
    private user1:UserName;
    constructor(@inject(TYPES.Username) user1:UserName){
        this.user1=user1;
    }
    public getInfo(): string {
        return `Name:${this.user1.getName()}, Message:${this.user1.getMsg()} `;
    }
}