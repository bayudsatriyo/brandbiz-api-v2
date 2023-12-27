import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import prismaClient from '../applications/database'
import ResponseError from '../exceptions/ResponseError'
import validate from '../validations/validate'
import usersValidation from '../validations/usersValidation'

export interface User {
  email: string
  username: string
  fullname: string
  password: string
  alamat?: string
  role?: string
}

interface UserResponse {
  email: string
  username: string
  fullname: string
}

interface TokenUser {
  token: string
}

export interface authenticationUser {
  username: string, 
  password: string
}

const addUsers = async (users: User): Promise<UserResponse> => {
  const userData: User = validate(usersValidation.addUsersValidation, users)

  const cekUser: number | null = await prismaClient.user.count({
    where: {
      username: userData.username
    }
  })

  if (cekUser === 1) {
    throw new ResponseError(404, 'Username atau email sudah digunakan')
  }

  userData.password = await bcrypt.hash(userData.password, 10)

  const DataUser = await prismaClient.user.create({
    data: userData,
    select: {
      email: true,
      username: true,
      fullname: true
    }
  })

  return DataUser as UserResponse
}

const authentication = async (users: authenticationUser): Promise<TokenUser> => {
    const userData: User = validate(usersValidation.loginUserValidation, users)

    const cekUser: authenticationUser | null | undefined = await prismaClient.user.findUnique({
      where: {
        username: userData.username,
      },
      select: {
        username: true,
        password: true
      }
    })

    if(cekUser === null || cekUser === undefined){
      throw new ResponseError(404, 'Username atau password salah')
    }
    console.log(cekUser.password)
    console.log(userData.password)
    const cekPassword = await bcrypt.compare(userData.password, cekUser.password)
    console.log(cekPassword);
    if(cekPassword === false){
      throw new ResponseError(404, 'Username atau Password salah')
    }

    const newToken = uuid().toString()
    const UserToken = await prismaClient.user.update({
      where: {
        username: userData.username
      },
      data: {
        token: newToken
      },
      select: {
        token: true
      }
    })

    return UserToken as TokenUser
}

export default { addUsers, authentication }
