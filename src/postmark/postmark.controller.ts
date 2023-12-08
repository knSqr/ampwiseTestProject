import { Controller, Get, Post } from '@nestjs/common';
import { PostmarkService } from './postmark.service';

@Controller('postmark')
export class PostmarkController {
    constructor(private readonly postmarkService: PostmarkService) { }

    @Get('greetCustomerEmail')
    example_sendGreetEmail(): Promise<string> {
        return this.postmarkService.greetCustomerEmail();
    }


}
