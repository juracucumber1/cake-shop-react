import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { Product, ProductDocument } from './schemas/product.schema'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private product: Model<ProductDocument>
  ) {}

  async getAll(): Promise<ProductDocument[]> {
    return this.product.find().exec()
  }

  async getById(id: string): Promise<ProductDocument> {
    return this.product.findById(id)
  }

  async create(productDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.product(productDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<ProductDocument> {
    return this.product.findByIdAndRemove(id)
  }

  async update(
    id: string,
    productDto: UpdateProductDto
  ): Promise<ProductDocument> {
    return this.product.findByIdAndUpdate(id, productDto, { new: true })
  }
}
