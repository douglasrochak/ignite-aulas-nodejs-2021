import { ICategoriesRepository } from '../repositories/ICategoryRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {

  constructor(private specificationRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationService }