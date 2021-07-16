import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentsService";


class CreateComplimentController {

    async handle(req: Request, res: Response){
        const { user_id } = req

        const {tag_id, user_receiver, message} = req.body

        const createComplimentService = new CreateComplimentService()
        
        const compliment =  await createComplimentService.execute({tag_id, user_sender: user_id, user_receiver, message})

        return res.json(compliment)
    }
}

export {CreateComplimentController}