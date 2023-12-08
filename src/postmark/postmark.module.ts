import { Module } from '@nestjs/common';
import { PostmarkController } from './postmark.controller';
import { PostmarkService } from './postmark.service';

/* import { Module, DynamicModule } from '@nestjs/common';
import { PostmarkService } from './postmark.service';
import { POSTMARK_MODULE_OPTIONS } from './postmark.constants';
import { IsString, IsNotEmpty, validateOrReject } from 'class-validator';
 */

@Module({
  controllers: [PostmarkController],
  providers: [PostmarkService],
  exports: [PostmarkService],
})
export class PostmarkModule { }
