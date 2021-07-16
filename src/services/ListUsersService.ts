import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepository"


class ListUsersService {
    async execute(){
        const userRepositories = getCustomRepository(UserRepositories)

        const users = await userRepositories.find()

        return classToPlain(users)
    }

}

export {ListUsersService}