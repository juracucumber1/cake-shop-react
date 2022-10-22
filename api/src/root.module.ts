import { Module } from '@nestjs/common';
import {ProductModule} from "./domain/product/product.module";

@Module({
  imports: [
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
