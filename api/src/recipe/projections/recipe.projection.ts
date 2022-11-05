import { Types } from 'mongoose'
import { Recipe } from '../schemas/recipe.schema'

export class RecipeProjection extends Recipe {
  id: Types.ObjectId
}
