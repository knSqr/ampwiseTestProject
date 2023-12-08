import { Controller, Get, Post } from '@nestjs/common';
import { PostmarkService } from './postmark.service';

@Controller('postmark')
export class PostmarkController {
    constructor(private readonly postmarkService: PostmarkService) { }


    @Get()
    test(): string {
        return this.postmarkService.test();
    }

    /*    @Get('greetCustomerEmail')
       example_sendGreetEmail(POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID): Promise<string> {
           return this.postmarkService.greetCustomerEmail(POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID);
       } */


}
