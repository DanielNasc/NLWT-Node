import { getCustomRepository } from "typeorm"
import {TagsRespotitory} from '../repositories/TagsRespotitory'

class CreateTagService{

    async execute(name: string){
        const tagsRespotitories = getCustomRepository(TagsRespotitory)

        if(!name){
            throw new Error('invalid name')
        }

        //Olha se a tag já existe
        const tagsAlreadyExists = await tagsRespotitories.findOne({name})
        if(tagsAlreadyExists) throw new Error('tags already exists')

        //Cria uma tag e salva
        const tag = tagsRespotitories.create({name})
        await tagsRespotitories.save(tag)

        return tag
    }

}

export {CreateTagService}