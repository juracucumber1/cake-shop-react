import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose'
import { IsNumber, IsString,  } from "class-validator";

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop()
  @IsString()
  name: string

  @Prop()
  @IsNumber()
  price: number

  @Prop()
  @IsNumber()
  weight: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)
