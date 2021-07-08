import {getCustomRepository} from 'typeorm'
import {UserRepositories} from '../repositories/UserRepository'

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, admin}: IUserRequest){
        const UserRepository = getCustomRepository(UserRepositories)

        //Verifica se o email está preenchido========================================
        if(!email){ throw new Error('invalid email') }

        //Verifica se o email ja existe...===========================================
        const alreadyExists = await UserRepository.findOne({email})

        //...se sim, lança um erro...================================================
        if(alreadyExists){ throw new Error('user already exists') }

        //...se não, cria um novo usuário============================================
        const user = UserRepository.create({
            name, email, admin
        })

        //Salvar usuário=============================================================
        await UserRepository.save(user) 

        console.log('create user service ok');

        return user
    }
}

export {CreateUserService}