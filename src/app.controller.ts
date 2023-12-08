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
    const { POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID } = process.env;

    return this.postmarkService.greetCustomerEmail(POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID);
  }

  @Post()
  sayPost(): string {
    return this.appService.sayPost();
  }

  @Post('env')
  leakENV(): string {
    return this.appService.leakENV();
  }

  @Post('envshort')
  envshort(): string {
    console.log("erther")
    return `test s ${process.env.TESTKEY}`;
  }

  @Get('testsendemail')
  testSendEmail(): string {
    // Send an email:

    //
    return `hi`;
  }

}
