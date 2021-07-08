import {Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email, admin} = req.body

        const UserService = new CreateUserService
        const user = await UserService.execute({name, email, admin})
        
        console.log('handle ok');
        
        return res.json(user)
    }
}

export {CreateUserController}