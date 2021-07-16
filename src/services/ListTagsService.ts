import { getCustomRepository } from "typeorm"
import { TagsRespotitory } from "../repositories/TagsRespotitory"
import { classToPlain } from 'class-transformer'

class ListTagsService {

    async execute(){
        const tagsRepository = getCustomRepository(TagsRespotitory)

        const tags = await tagsRepository.find()

        return classToPlain(tags)
    }
}

export { ListTagsService }