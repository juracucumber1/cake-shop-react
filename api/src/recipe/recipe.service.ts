import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateRecipeDto } from './dto/create-recipe.dto'
import { Recipe, RecipeDocument } from './schemas/recipe.schema'
import { UpdateRecipeDto } from './dto/update-recipe.dto'

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipe: Model<RecipeDocument>
  ) {}

  async getAll() {
    return this.recipe.find().populate('products.product').exec()
  }

  async getById(id: string) {
    return this.recipe.findById(id).populate('products.product').exec()
  }

  async create(createDto: CreateRecipeDto) {
    const newRecipe = new this.recipe({
      name: createDto.name,
      description: createDto.description,
      products: createDto.products.map(({ product, weight }) => ({
        product,
        weight
      }))
    })

    return newRecipe.save()
  }

  async remove(id: string) {
    return this.recipe.findByIdAndRemove(id)
  }

  async update(id: string, recipeDto: UpdateRecipeDto) {
    return this.recipe.findByIdAndUpdate(id, recipeDto, { new: true })
  }
}
