import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuestionModule } from './question/question.module';
import { QuestionController } from './question/question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
    ),
    QuestionModule,
  ],
  controllers: [AppController, QuestionController],
  providers: [AppService],
})
export class AppModule {}
