import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepository"
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

interface IAtuenticateRequest {
    email: string;
    password: string;
}

class AutenticatUserService {

    async execute({email, password}: IAtuenticateRequest){
        const repositories = getCustomRepository(UserRepositories)

        //verificar email
        const user = await repositories.findOne({email})

        if(!user){
            throw new Error('Email/Password incorrect')
        }
        //verificar password

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error('Email/Password incorrect')
        }

        const token = sign({email: user.email}, 'YmFndWxobyBzZWd1cm8=', 
            {subject: user.id,
            expiresIn: "1d"
            })

        return token

    }
}

export {AutenticatUserService}