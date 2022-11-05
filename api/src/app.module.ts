import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {RecipeModule} from "./recipe/recipe.module";

const mongoUrl = 'mongodb+srv://admin:dwJVhHA3fA03Zjir@cake-cluster.tbwccbq.mongodb.net/cake?retryWrites=true&w=majority'

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    ProductsModule,
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
