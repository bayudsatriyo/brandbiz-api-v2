import express from 'express'
import Userhandler from '../handler/userhandler'
import { authMiddleware } from '../middleware/auth-middleware'
import multer from 'multer'
import { Request } from "express";
import path = require('path');

type DestinationCallback = (error: Error | null, destination: string) => void
type FilenameCallback = (error: Error | null, filename: string) => void


const storage = multer.diskStorage({
  destination(_req: Request, _file: Express.Multer.File, cb: DestinationCallback) {
    cb(null, 'src/profile');
  },
  filename(req: Request, file: Express.Multer.File, cb: FilenameCallback) {
    req.format = req.user.username + path.extname(file.originalname)
    cb(null, `${req.format}`);
  },
});

const upload = multer({ storage: storage });

const userRoutes = express.Router()
const controlUser = new Userhandler()

userRoutes.use(authMiddleware)
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users Routes
 */

/**
 * tags:
 *   name: Learning
 *   description: The Learning Path
 */

/**
 * @swagger
 *  /brandbiz/user:
 *    get:
 *      summary : Get User by Token
 *      tags : [Users]
 *      parameters:
 *         - in: header
 *           name: Authorization
 *           schema:
 *           type: string
 *           required: true
 *           description: A token string
 *      responses:
 *        "200":
 *          description: SUCCESS
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/GetUserByIdResponse'
 *        "401":
 *          description: Unauthorization User
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedResponse'
 *    put:
 *      summary : Update User by Token
 *      tags : [Users]
 *      parameters:
 *         - in: header
 *           name: Authorization
 *           schema:
 *           type: string
 *           required: true
 *           description: A token string
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUsersValidation'
 *      responses:
 *        "200":
 *          description: Update User data
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UpdateUserByIdResponse'
 *        "401":
 *          description: Unauthorization User
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedResponse'
 *    delete:
 *      summary : Logout User by Token
 *      tags : [Users]
 *      parameters:
 *         - in: header
 *           name: Authorization
 *           schema:
 *           type: string
 *           required: true
 *           description: A token string
 *      responses:
 *        "200":
 *          description: Update User data
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LogoutResponse'
 *        "401":
 *          description: Unauthorization User
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedResponse'
 */



// users Route
userRoutes.route('/brandbiz/user')
  .get(controlUser.getUserByUsernameHandler)
  .put(upload.single('profileUrl'), controlUser.updateUserHandler)
  .delete(controlUser.logoutUserHandler)


/**
 * @swagger
 *  /brandbiz/user/{idLearningPath}:
 *    get:
 *      summary : User get Learning Path
 *      tags : [Learning]
 *      parameters:
 *         - in: header
 *           name: Authorization
 *           schema:
 *           type: string
 *           required: true
 *           description: A token string
 *      responses:
 *        "200":
 *          description: SUCCESS
 *          content: 
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/usergetlearning'
 *        "401":
 *          description: Unauthorization User
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedResponse'
 */

userRoutes.route('/brandbiz/user/:idLearning').post(controlUser.usergetlearningHandler)
userRoutes.route('/brandbiz/user/learning/:idLearning/skor/:skor').put(controlUser.userUpdateSkor)

// Feedback Routes
userRoutes.route('/brandbiz/feedback').post(controlUser.userAddFeedbackHandler)


export default userRoutes