import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from "./domain/product";
import { RootSchema } from "./schema/root.schema";

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature(RootSchema)
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
