import express from 'express'
import errorMiddleware from '../middleware/error-middleware'
import publicRouter from '../routes/publicRoutes'
import userRoutes from '../routes/usersRoutes'
import learningRoutes from '../routes/learningRoutes'
const app = express()
export { app }
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(publicRouter)
app.use(learningRoutes)
app.use(userRoutes)
app.use(errorMiddleware)
