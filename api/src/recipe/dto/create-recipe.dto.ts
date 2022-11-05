import { IsString, IsOptional, ArrayMinSize } from 'class-validator'
import { Types } from 'mongoose'

export class CreateRecipeDto {
  @IsString()
  name: string

  @IsString()
  @IsOptional()
  description: string

  @ArrayMinSize(1)
  products: {
    product: Types.ObjectId
    weight: number
  }[]
}
