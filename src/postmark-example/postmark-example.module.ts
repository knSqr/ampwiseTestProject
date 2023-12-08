import { Module } from '@nestjs/common';
import { PostmarkExampleController } from './postmark-example.controller';
import { PostmarkExampleService } from './postmark-example.service';
import { PostmarkModule } from '../postmark/postmark.module';

@Module({
  imports: [PostmarkModule],
  controllers: [PostmarkExampleController],
  providers: [PostmarkExampleService]
})
export class PostmarkExampleModule { }
