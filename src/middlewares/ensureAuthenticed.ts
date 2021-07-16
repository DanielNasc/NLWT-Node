import {Request, Response, NextFunction} from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export function ensureAuthenticed(req: Request, res: Response, next: NextFunction){
    //Receber token
    const authToken =  req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    const [, token ] = authToken.split(' ')

    try {
        const {sub} = verify(token, 'YmFndWxobyBzZWd1cm8=') as IPayload

        req.user_id = sub

        

        return next()
    } catch (err) {

        return res.status(401).end()
    }


    //verificar se o token esta preenchido

}