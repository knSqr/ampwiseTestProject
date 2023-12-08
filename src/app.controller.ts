import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostmarkService } from './postmark/postmark.service';

// Require:
//var postmark = require("postmark");

//import { PostmarkModule } from './postmark/postmark.module';



@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) { }
  constructor(private readonly appService: AppService, private readonly postmarkService: PostmarkService) { }


  @Get('send-email')
  sendEmail(): Promise<string> {
    return this.postmarkService.greetCustomerEmail();
  }


}
