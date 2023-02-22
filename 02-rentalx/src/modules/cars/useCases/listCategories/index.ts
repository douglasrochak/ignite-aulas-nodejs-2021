import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './listCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)


export { listCategoriesController }