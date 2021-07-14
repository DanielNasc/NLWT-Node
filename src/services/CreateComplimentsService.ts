import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepository"

interface IComplimentsRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

class CreateComplimentService{
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentsRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UserRepositories)
        
        if(user_sender === user_receiver){
            throw new Error('You cannot send this to yourself!')
        }

        const userRecieverExists = await usersRepositories.findOne(user_receiver)

        if(!userRecieverExists){ throw new Error("user does not exists!")}

        const compliment = complimentsRepositories.create({
            tag_id, user_sender, user_receiver, message
        })

        await complimentsRepositories.save(compliment)

        return compliment
    }
}


export {CreateComplimentService}