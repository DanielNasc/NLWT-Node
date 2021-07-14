import {Router} from 'express'
import { AutenticateUserController } from './controllers/AutenticateUser'
import { CreateTagController } from './controllers/CreateTagController'
import {CreateUserController} from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const routes = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const autenticationController = new AutenticateUserController()

routes.post('/users', userController.handle)
routes.post('/tags', ensureAdmin, tagController.handle)
routes.post('/login', autenticationController.handle)

export {routes}