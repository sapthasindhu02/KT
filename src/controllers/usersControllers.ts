import {
  Get,
  Post,
  Route,
  Body,
  Response,
  SuccessResponse,
  Controller,
} from "tsoa";
import { UserService } from "../services/userService";
import {
  aa,
  Interface2,
  Interface1,
  User,
  UserCreationRequest,
  UsersList,
} from "../models/User";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";

@Route("users")
@injectable()
export class UsersController extends Controller {
  private userServiceObj?: Interface1;

  constructor(@inject(TYPES.User_Service) userServiceObj?: Interface1) {
    super();
    this.userServiceObj = userServiceObj;
  }

  /**
   * this is get Users endpoint
   * @param id this is the user id
   **/

  @Response(200, "Success")
  @Response(400, "Bad Request")
  @Response(401, "Unauthorized")
  @Response(403, "Forbidden")
  @Get("{id}")
  public async getUserObj(id: number) {
    console.log("hii");

    return this.userServiceObj?.getUser(id);
    //return await new UserService().get(id)
  }
  @Get()
  public async getUsersList() {
    console.log("hii");

    return this.userServiceObj?.getUsersList();
  }
  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationRequest
  ): Promise<void> {
    new UserService().create(requestBody);
    this.setStatus(201); // set return status 201
    return Promise.resolve();
  }
}
