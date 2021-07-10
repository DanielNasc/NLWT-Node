import {EntityRepository, Repository} from 'typeorm'
import {Tag} from '../entities/Tag'

@EntityRepository(Tag)
class TagsRespotitory extends Repository<Tag> {

}

export {TagsRespotitory}