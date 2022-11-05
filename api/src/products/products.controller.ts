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
import { ProductProjection } from './projections/product.projection'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ProductsService } from './products.service'
import { Product, ProductDocument } from './schemas/product.schema'

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  private mapProduct(product: ProductDocument): ProductProjection {
    return {
      id: product._id,
      name: product.name,
      weight: product.weight,
      price: product.price
    }
  }

  @Get()
  async getAll(): Promise<ProductProjection[]> {
    const products = await this.products.getAll()
    return products.map((p) => this.mapProduct(p))
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<ProductProjection> {
    const product = await this.products.getById(id)
    return this.mapProduct(product)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  async create(
    @Body() createProductDto: CreateProductDto
  ): Promise<ProductProjection> {
    const product = await this.products.create(createProductDto)
    return this.mapProduct(product)
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<Product> {
  //   return this.productsService.remove(id)
  // }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string
  ): Promise<Product> {
    return this.products.update(id, updateProductDto)
  }
}
