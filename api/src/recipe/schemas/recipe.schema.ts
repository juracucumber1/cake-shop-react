import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types, ObjectId, SchemaTypes } from 'mongoose'
import { Product } from '../../products/schemas/product.schema'

export type RecipeDocument = Recipe & Document

@Schema()
export class Recipe {
  @Prop()
  name: string

  @Prop()
  description: string

  @Prop({
    type: [
      {
        weight: { type: Number },
        product: { type: SchemaTypes.ObjectId, ref: Product.name }
      }
    ]
  })
  products: {
    product: Types.ObjectId
    weight: number
  }[]
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)
