import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mosherif:mom2782000@cluster0.yn3hysw.mongodb.net/ecommercedb?retryWrites=true&w=majority&appName=Cluste',
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
