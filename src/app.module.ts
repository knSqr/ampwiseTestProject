import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PostmarkModuleModule } from './postmark-module/postmark-module.module';
import { PostmarkModule } from './postmark/postmark.module';
import { PostmarkExampleModule } from './postmark-example/postmark-example.module';

import config from './postmark/postmark.configuration';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }), PostmarkModule, PostmarkExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
