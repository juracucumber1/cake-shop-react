import { Product } from '../schemas/product.schema'
import { Prop } from '@nestjs/mongoose'
import { SchemaTypes, Types } from 'mongoose'

export class ProductProjection extends Product {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId
}
