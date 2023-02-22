import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase'

const specificationRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateCategoryUseCase(specificationsRepository)

  createSpecificationService.execute({ name, description })

  return response.status(201).json()
})

export { specificationRoutes }