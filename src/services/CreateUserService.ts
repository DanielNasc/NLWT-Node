import {getCustomRepository} from 'typeorm'
import {UserRepositories} from '../repositories/UserRepository'
import {hash} from 'bcryptjs'

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({name, email, admin = false, password}: IUserRequest){
        const UserRepository = getCustomRepository(UserRepositories)

        //Verifica se o email está preenchido========================================
        if(!email){ throw new Error('invalid email') }

        //Verifica se o email ja existe...===========================================
        const alreadyExists = await UserRepository.findOne({email})

        //...se sim, lança um erro...================================================
        if(alreadyExists){ throw new Error('user already exists') }

        const passwordHash = await hash(password, 8)

        //...se não, cria um novo usuário============================================
        const user = UserRepository.create({
            name, email, admin, password: passwordHash
        })

        //Salvar usuário=============================================================
        await UserRepository.save(user) 

        console.log('create user service ok');

        return user
    }
}

export {CreateUserService}