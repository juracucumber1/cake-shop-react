import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { connect } from 'mongoose'

import { ProductModule } from "./domain/product";
import { RootSchema } from "./schema/root.schema";

// const mongoUrl = 'mongodb://admin:dwJVhHA3fA03Zjir@cake-cluster.tbwccbq.mongodb.net/cake'
const mongoUrl = 'mongodb+srv://admin:dwJVhHA3fA03Zjir@cake-cluster.tbwccbq.mongodb.net/cake?retryWrites=true&w=majority'

const start = async () => {
  try {
    console.log('start')
    await connect(mongoUrl)
  } catch (e) {
    console.log(e)
  }
}

start()

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature(RootSchema),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
