import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product, ProductDocument } from "../../schema/product.schema";
import {CreateProductDto, UpdateProductDto} from "./dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    find() {
        return this.productModel.find()
    }

    create(doc: CreateProductDto) {
        const product = new this.productModel(doc)
        return product.save()
    }

    update(id: ObjectId, doc: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, doc)
    }

    remove(id: ObjectId) {
        return this.productModel.findByIdAndRemove(id)
    }
}
