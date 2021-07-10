import {Router} from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import {CreateUserController} from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const routes = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()

routes.post('/users', userController.handle)
routes.post('/tags', ensureAdmin, tagController.handle)

export {routes}