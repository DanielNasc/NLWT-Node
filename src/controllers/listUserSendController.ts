import { Request, Response } from "express";
import { listUserSenderCompliments } from "../services/listUserSenderCompliments";


class SenderComplimentsController {
    async handle(req: Request, res: Response){
        const {user_id} = req
        const listSenderService = new listUserSenderCompliments()


        const compliments = await listSenderService.execute(user_id)

        return res.json(compliments)
    }
}

export {SenderComplimentsController}