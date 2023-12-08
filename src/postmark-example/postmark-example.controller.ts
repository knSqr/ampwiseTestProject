import { Controller, Get } from '@nestjs/common';
import { PostmarkExampleService } from './postmark-example.service';


@Controller('postmark-example')
export class PostmarkExampleController {
    constructor(private readonly postmarkExampleService: PostmarkExampleService) { }

    @Get('sendemail')
    async sendExampleEmail(): Promise<string> {
        return await this.postmarkExampleService.sendExampleEmail();
        // return 'Example email sent successfully!';
    }


}
