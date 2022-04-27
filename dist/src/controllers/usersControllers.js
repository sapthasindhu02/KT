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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const userService_1 = require("../services/userService");
const inversify_1 = require("inversify");
const types_1 = require("../types");
let UsersController = class UsersController extends tsoa_1.Controller {
    constructor(userServiceObj) {
        super();
        this.userServiceObj = userServiceObj;
    }
    /**
     * this is get Users endpoint
     * @param id this is the user id
     **/
    getUserObj(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log("hii");
            return (_a = this.userServiceObj) === null || _a === void 0 ? void 0 : _a.getUser(id);
        });
    }
    getUsersList() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log("hii");
            return (_a = this.userServiceObj) === null || _a === void 0 ? void 0 : _a.getUsersList();
        });
    }
    createUser(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            new userService_1.UserService().create(requestBody);
            this.setStatus(201); // set return status 201
            return Promise.resolve();
        });
    }
};
__decorate([
    (0, tsoa_1.Response)(200, "Success"),
    (0, tsoa_1.Response)(400, "Bad Request"),
    (0, tsoa_1.Response)(401, "Unauthorized"),
    (0, tsoa_1.Response)(403, "Forbidden"),
    (0, tsoa_1.Get)("{id}"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserObj", null);
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsersList", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created") // Custom success response
    ,
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
UsersController = __decorate([
    (0, tsoa_1.Route)("users"),
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.User_Service)),
    __metadata("design:paramtypes", [Object])
], UsersController);
exports.UsersController = UsersController;
