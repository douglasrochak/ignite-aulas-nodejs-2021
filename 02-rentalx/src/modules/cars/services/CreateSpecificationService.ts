import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {

  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)
    console.log('specificationAlreadyExists', specificationAlreadyExists)

    if (specificationAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.specificationRepository.create({ name, description })
  }
}

export { CreateSpecificationService }