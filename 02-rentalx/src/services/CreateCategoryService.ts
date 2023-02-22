import { ICategoriesRepository } from '../repositories/ICategoryRepository'

interface IRequest {
  name: string
  description: string
}

/**
 * [X] - Definir o tipo de retorno
 * [X] - Alterar o retorno do erro
 * [X] - Acessar o repositório
 */

class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }