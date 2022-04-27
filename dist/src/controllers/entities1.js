"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.FirstUser = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../types");
let FirstUser = class FirstUser {
    getName() {
        return 'John';
    }
    getMsg() {
        return `Hi this is ${this.getName()}`;
    }
};
FirstUser = __decorate([
    (0, inversify_1.injectable)()
], FirstUser);
exports.FirstUser = FirstUser;
let Users = class Users {
    constructor(user1) {
        this.user1 = user1;
    }
    getInfo() {
        return `Name:${this.user1.getName()}, Message:${this.user1.getMsg()} `;
    }
};
Users = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.Username)),
    __metadata("design:paramtypes", [Object])
], Users);
exports.Users = Users;
