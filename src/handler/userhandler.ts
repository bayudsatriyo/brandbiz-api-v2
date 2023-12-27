import userService from '../services/userService'
import { type Response, type Request, type NextFunction } from 'express'

class Userhandler {
  async registerUser (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = req.body
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
      const user = req.body
      
      const result = await userService.authentication(user)
      res.status(200).json({
        status: 'SUCCESS',
        data: result
      })
    } catch (e) {
      next(e)
    }
  }

  async getUserByUsernameHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const username = req.user.username

      const result = await userService.getUserByUsername(username)

      res.status(200).json({
        status: 'SUCCESS',
        data: result
      })
    } catch (e) {
      next(e)
    }
  }

  async updateUserHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dataUser = req.body
      const username = req.user.username

      const result = await userService.updateUser(dataUser, username)

      res.status(200).json({
        status: 'UPDATED',
        data: result
      })
    } catch (e) {
      next(e)
    }
  }

  async logoutUserHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const username = req.user.username

      const result = await userService.logoutUser(username)

      res.status(200).json({
        status: 'LOGOUT',
        data: `User dengan nama ${result} sudah logout`
      })
    } catch (e) {
      next(e)
    }
  }
}

export default Userhandler
