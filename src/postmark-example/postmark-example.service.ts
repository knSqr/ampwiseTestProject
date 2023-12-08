import { Injectable } from '@nestjs/common';
import { PostmarkService } from '../postmark/postmark.service';

@Injectable()
export class PostmarkExampleService {

    constructor(private readonly postmarkService: PostmarkService) { }

    async sendExampleEmail(): Promise<string> {
        const { POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID } = process.env;
        return this.postmarkService.greetCustomerEmail(POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID);
    }

}
