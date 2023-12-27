import express from 'express'
import Userhandler from '../handler/userhandler'
import { authMiddleware } from '../middleware/auth-middleware'

const userRoutes = express.Router()
const controlUser = new Userhandler()

userRoutes.use(authMiddleware)

userRoutes.route('/brandbiz/user')
    .get(controlUser.getUserByUsernameHandler)
    .put(controlUser.updateUserHandler)
    .delete(controlUser.logoutUserHandler)

export default userRoutes