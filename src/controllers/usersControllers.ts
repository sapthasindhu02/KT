import {Get, Post, Route, Body,Response, SuccessResponse, Controller } from 'tsoa'
import {UserService} from '../services/userService'
import {User, UserCreationRequest} from '../models/User'

@Route('Users')
export class UsersController extends Controller {
  /** 
  * this is get Users endpoint
  * @param id this is the user id
  **/
  @Response(200, 'Success')
  @Response(400, 'Bad Request')
  @Response(401, 'Unauthorized')
  @Response(403, 'Forbidden')
  @Get('{id}')
  public async getUser(id: number): Promise<User> {
    return await new UserService().get(id)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationRequest): Promise<void> {
    new UserService().create(requestBody)
    this.setStatus(201) // set return status 201
    return Promise.resolve()
  }
}