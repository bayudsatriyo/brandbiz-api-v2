import Joi from 'joi'


/**
 * @swagger
 * components: 
 *  schemas: 
 *    addUsersValidation:
 *      type: object
 *      required:
 *        - email
 *        - username
 *        - fullname
 *        - password
 *      properties:
 *        email: 
 *          type: string
 *          default: jane.doe@example.com
 *        username: 
 *          type: string
 *          default: marryjane
 *        fullname: 
 *          type: string
 *          default: marry jane
 *        password: 
 *          type: string
 *          default: stringPassword123
 *        alamat: 
 *          type: string
 *          default: Jl. Aerok No. 45
 *        role: 
 *          type: string
 *          default: Web Dev
 *    addUsersResponse:
 *      type: object
 *      properties:
 *        email: 
 *          type: string
 *        username: 
 *          type: string
 *        fullname: 
 *          type: string
 *    GetUserByIdResponse:
 *      type: object
 *      properties:
 *        email: 
 *          type: string
 *          default: jane.doe@example.com
 *        username: 
 *          type: string
 *          default: marryjane
 *        fullname: 
 *          type: string
 *          default: marry jane
 *        alamat: 
 *          type: string
 *          default: Jl. Aerok No. 45
 *        role: 
 *          type: string
 *          default: Web Dev
 *    UpdateUsersValidation:
 *      type: object
 *      required:
 *        - token
 *      properties:
 *        email: 
 *          type: string
 *          default: jane.doe@example.com
 *        username: 
 *          type: string
 *          default: marryjane
 *        fullname: 
 *          type: string
 *          default: marry jane
 *        password: 
 *          type: string
 *          default: stringPassword123
 *        alamat: 
 *          type: string
 *          default: Jl. Aerok No. 45
 *        role: 
 *          type: string
 *          default: Web Dev
 *        profileUrl:
 *          type: jpg, png, jpeg
 *          default: profile.jpg
 *    UpdateUserByIdResponse:
 *      type: object
 *      properties:
 *        email: 
 *          type: string
 *          default: jane.doe@example.com
 *        username: 
 *          type: string
 *          default: marryjane
 *        fullname: 
 *          type: string
 *          default: marry jane
 *        alamat: 
 *          type: string
 *          default: Jl. Aerok No. 45
 *        role: 
 *          type: string
 *          default: Web Dev
 *        profileUrl: 
 *          type: string
 *          default: http://localhost:8080/profile.jpg
 *    UnauthorizedResponse:
 *      type: object
 *      properties:
 *        error: 
 *          type: string
 *          default: Unauthorized
 *    LogoutResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: LOGOUT
 *        data:
 *          type: string
 *          example: User dengan nama marryjane sudah logout
 *    usergetlearning:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: SUCCESS
 *        data:
 *          type: object
 *          default:
 *            useremail:
 *              type: string
 *              default: marryjane@gmail.com
 *            learningId:
 *              type: number
 *              example: 2
 *          
 */ 

const addUsersValidation = Joi.object({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(100).required(),
  fullname: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional()
})

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required()
})

const emailorusernameValidation = Joi.string().max(100).required()

const updateValidation = Joi.object({
  email: Joi.string().max(100).optional(),
  username: Joi.string().max(100).optional(),
  fullname: Joi.string().max(100).optional(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional().allow(null)
})

const skorValidation = Joi.number().positive().min(1).required()

const feedbackValidation = Joi.string().required()

export default {
  addUsersValidation, 
  loginUserValidation, 
  emailorusernameValidation, 
  updateValidation, 
  feedbackValidation,
  skorValidation
}
