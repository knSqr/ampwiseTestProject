import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PostmarkModuleModule } from './postmark-module/postmark-module.module';
import { PostmarkModule } from './postmark/postmark.module';
import { PostmarkExampleModule } from './postmark-example/postmark-example.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), PostmarkModule, PostmarkExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
