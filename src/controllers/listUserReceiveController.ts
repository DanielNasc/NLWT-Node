import { Request, Response } from "express";
import { listUserReceivedCompliments } from "../services/listUserReceiverCompliments";


class ReceiverComplimentsController {
    async handle(req: Request, res: Response){
        const {user_id} = req
        const listReceiverService = new listUserReceivedCompliments

        const compliments = await listReceiverService.execute(user_id)

        return res.json(compliments)
    }
}

export {ReceiverComplimentsController}