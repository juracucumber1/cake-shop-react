import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common'
import { CreateRecipeDto } from './dto/create-recipe.dto'
import { UpdateRecipeDto } from './dto/update-recipe.dto'
import { RecipeProjection } from './projections/recipe.projection'
import { RecipeService } from './recipe.service'
import { RecipeDocument } from './schemas/recipe.schema'

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipe: RecipeService) {}

  private mapRecipe(recipe: RecipeDocument): RecipeProjection {
    return {
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      products: recipe.products,
    }
  }

  @Get()
  async getAll(): Promise<RecipeProjection[]> {
    const recipes = await this.recipe.getAll()
    return recipes.map((v) => this.mapRecipe(v))
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<RecipeProjection> {
    const recipe = await this.recipe.getById(id)
    return this.mapRecipe(recipe)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  async create(
    @Body() createProductDto: CreateRecipeDto
  ): Promise<RecipeProjection> {
    const recipe = await this.recipe.create(createProductDto)
    return this.mapRecipe(recipe)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<RecipeProjection> {
    const recipe = await this.recipe.remove(id)
    return this.mapRecipe(recipe)
  }

  @Put(':id')
  async update(
    @Body() updateProductDto: UpdateRecipeDto,
    @Param('id') id: string
  ): Promise<RecipeProjection> {
    const recipe = await this.recipe.update(id, updateProductDto)
    return this.mapRecipe(recipe)
  }
}
