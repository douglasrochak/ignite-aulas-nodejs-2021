import { Specification } from '../../model/Specification'
import { ICreateSpecificationDTO, ISpecificationsRepository } from '../ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specification[]

  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }
    return SpecificationsRepository.INSTANCE
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name, description
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(specification => specification.name === name)
    return specification
  }

  list(): Specification[] {
    return this.specifications
  }
}

export { SpecificationsRepository }