import {Router} from 'express'
import {CreateUserController} from './controllers/CreateUserController'

const routes = Router()
const userController = new CreateUserController()

routes.post('/users', userController.handle)

export {routes}