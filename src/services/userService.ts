import {User, UserCreationRequest} from '../models/User'

export class UserService {
  public async get(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let user: User = {
        id: 1234,
        email: 'string',
        name: 'Name',
        phoneNumbers: [],
        status: 'status'
      }

      resolve(user)
    })
  }

  public async create(requestBody: UserCreationRequest): Promise<User> {
    let user: User = {
      id: 12345,
      email:requestBody.email,
      name: requestBody.name,
      phoneNumbers: [],
      status: 'status'
    }
    return Promise.resolve(user)
  }
}