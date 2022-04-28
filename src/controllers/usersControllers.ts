import { Get, Route, Response, Controller } from "tsoa";
import { UserDetails } from "../models/User";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";

@Route("users")
@injectable()
export class UsersController extends Controller {
  private _userService: UserDetails;

  constructor(@inject(TYPES.User_Service) userService: UserDetails) {
    super();
    this._userService = userService;
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
    return this._userService.getUser(id);
  }
  @Get()
  public async getUsersList() {
    return this._userService.getUsersList();
  }
}
