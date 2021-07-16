import {Router} from 'express'
import { AutenticateUserController } from './controllers/AutenticateUser'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import {CreateUserController} from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ReceiverComplimentsController } from './controllers/listUserReceiveController'
import { ListUsersController } from './controllers/ListUsersController'
import { SenderComplimentsController } from './controllers/listUserSendController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticed } from './middlewares/ensureAuthenticed'

const routes = Router()

const userController = new CreateUserController()
const tagController = new CreateTagController()
const autenticationController = new AutenticateUserController()
const ComplimentController = new CreateComplimentController()
const ListSenderCompliments = new SenderComplimentsController()
const ListReceiverCompliments = new ReceiverComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

const adminMiddlewares = [ensureAuthenticed, ensureAdmin,]

routes.post('/users', userController.handle)
routes.post('/tags', adminMiddlewares, tagController.handle)
routes.post('/login', autenticationController.handle)
routes.post('/compliment', ensureAuthenticed,ComplimentController.handle)

routes.get('/users/compliments/send', ensureAuthenticed ,ListSenderCompliments.handle)
routes.get('/users/compliments/receive', ensureAuthenticed,ListReceiverCompliments.handle)
routes.get('/tags', ensureAuthenticed, listTagsController.handle)
routes.get('/users', adminMiddlewares, listUsersController.handle)

export {routes}