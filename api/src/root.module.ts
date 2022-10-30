import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModule } from "./domain/product";
import { RootSchema } from "./schema/root.schema";

// const mongoUrl = 'mongodb://admin:dwJVhHA3fA03Zjir@cake-cluster.tbwccbq.mongodb.net/cake'
const mongoUrl = 'mongodb+srv://admin:dwJVhHA3fA03Zjir@cake-cluster.tbwccbq.mongodb.net/cake?retryWrites=true&w=majority'

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl, {
      useNewUrlParser: true,
    }),
    // MongooseModule.forFeature(RootSchema),
    // ProductModule
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
