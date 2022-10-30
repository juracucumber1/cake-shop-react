import {Body, Controller, Get, Post} from "@nestjs/common";
import { CreateProductDto } from "./dto";
import { ProductService } from "./product.service";

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('/product')
    find() {
        return this.productService.find();
    }

    @Post('/product')
    create(@Body() doc: CreateProductDto) {
        return this.productService.find();
    }
}
