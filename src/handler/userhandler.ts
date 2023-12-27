import userService, { authenticationUser, type User } from '../services/userService'
import { type Response, type Request, type NextFunction } from 'express'

class Userhandler {
  async registerUser (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = req.body as User
      console.log(users)

      const result = await userService.addUsers(users)

      res.status(201).json({
        status: 'CREATED',
        data: result
      })
    } catch (e) {
      next(e)
    }
  }

  async authenticationHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.body as authenticationUser
      
      const result = await userService.authentication(user)
      res.status(200).json({
        status: 'SUCCESS',
        data: result
      })
    } catch (e) {
      next(e)
    }
  }
}

export default Userhandler
