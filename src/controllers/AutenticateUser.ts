import { Request, Response } from "express";
import { AutenticatUserService } from "../services/AutenticateUserService";


class AutenticateUserController{
    
    async handle(req: Request, res: Response){
        const {email, password} = req.body

        const autenticatUserService = new AutenticatUserService()

        const token = await autenticatUserService.execute({email, password})
        
        return res.json(token)
    }

}

export {AutenticateUserController}