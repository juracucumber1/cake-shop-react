import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RecipeService } from './recipe.service'
import { RecipeController } from './recipe.controller'
import { Recipe, RecipeSchema } from './schemas/recipe.schema'

@Module({
  providers: [RecipeService],
  controllers: [RecipeController],
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
  ]
})
export class RecipeModule {}
