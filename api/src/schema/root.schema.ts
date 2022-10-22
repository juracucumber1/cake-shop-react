import { Product, ProductSchema } from "./product.schema";

export const RootSchema = [
    { name: Product.name, schema: ProductSchema },
]
